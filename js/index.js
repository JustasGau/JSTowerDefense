window.onload = main;
let ctx
let canvas
let img
let enemies = [];
let enemyCount = 3
let hearts = 10
let coins = 100
const explosions = [];

const mouse = {
    x: undefined,
    y: undefined
}
const placementTilesArray = [];

function main() {
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = 1280;
    canvas.height = 768;

    ctx.fillStyle = "#beeeeeef"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const placementTiles2D = []

    for (let i = 0; i < placementTiles.length; i += 20) {
        placementTiles2D.push(placementTiles.slice(i, i + 20))
    }


    placementTiles2D.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell === 14) {
                placementTilesArray.push(new PlacementTile({
                    position: {
                        x: x * 64,
                        y: y * 64
                    }
                }))
            }
        })
    })

    img = new Image();
    img.src = 'assets/map.png';
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
    }
    
    function spawnEnemies(spawnCount) {
        for (let i = 2; i < spawnCount + 2; i++) {
            const xOffset = i * 150;
            enemies.push(new Enemy({
                position: { x: waypoints[0].x - xOffset, y: waypoints[0].y }
            }))
        }
    }
    spawnEnemies(enemyCount)


    const buildings = [];

    function animate() {
        const animationID = requestAnimationFrame(animate)

        ctx.drawImage(img, 0, 0);
        for (let i = enemies.length -1; i >=0; i--) {
            const enemy = enemies[i]
            enemy.update();

            if (enemy.position.x > canvas.width) {
                hearts -= 1
                enemies.splice(i, 1)
                document.querySelector('#hearts').innerHTML = hearts
                if (hearts === 0 ) {
                    document.querySelector('#gameOver').style.display = 'flex'
                    cancelAnimationFrame(animationID)
                }
            }
        }
        // animate explosins
        for (let i = explosions.length -1; i >=0; i--) {
            const explosion = explosions[i]
            explosion.draw()
            explosion.update()

            if (explosion.frames.current >= explosion.frames.max - 1) {
                explosions.splice(i, 1)
            }
        }

        // tracking total amount of enemies
        if (enemies.length === 0) {
            spawnEnemies(enemyCount += 3)
        }

        placementTilesArray.forEach(tile => {
            tile.update(mouse);
        });

        
        buildings.forEach(building => {
            building.update();
            building.target = null;
            const validEnemies = enemies.filter((enemy) => {
                const xDiff = enemy.center.x - building.center.x;
                const yDiff = enemy.center.y - building.center.y;
                const distance = Math.hypot(xDiff, yDiff)
                return distance < enemy.radius + building.attackRadius;
            })
            building.target = validEnemies[0];
            for (let i = building.projectiles.length -1; i >=0; i--) {
                const projectile = building.projectiles[i]
                projectile.update();

                const xDiff = projectile.enemy.center.x - projectile.position.x;
                const yDiff = projectile.enemy.center.y - projectile.position.y;
                const distance = Math.hypot(xDiff, yDiff)

                // projectile hits the enemy
                if (distance < projectile.enemy.radius + projectile.radius) {
                    // enemy health
                    projectile.enemy.health -= 20
                    if (projectile.enemy.health <= 0) {
                        const enemyIndex = enemies.findIndex((enemy) => {
                            return projectile.enemy === enemy
                        })
                        if (enemyIndex > -1) {
                            coins += 25
                            document.querySelector('#coins').innerHTML = coins
                            enemies.splice(enemyIndex, 1)
                        }
                    }
                    explosions.push(new Sprite({ 
                        position: { x: projectile.position.x, y: projectile.position.y },
                        imageSrc: 'assets/explosion.png',
                        frames: { max: 4 },
                        offset: { x: 0, y: 0 } 
                    }))
                    building.projectiles.splice(i, 1)
                }
        }

        });

    }

    animate();

    let activeTile = undefined;

    canvas.addEventListener('click', (event) => {
        if (activeTile && !activeTile.occupied && coins - 50 >= 0) {
            coins -= 50
            document.querySelector('#coins').innerHTML = coins
            buildings.push(new Building({
                position: {
                    x: activeTile.position.x,
                    y: activeTile.position.y
                }
            }))
            activeTile.occupied = true;
            buildings.sort((a, b) => {
                return a.position.y - b.position.y
            })
        }
    })

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX
        mouse.y = event.clientY
        activeTile = null;
        for (let i = 0; i < placementTilesArray.length; i++) {
            const tile = placementTilesArray[i]
            if (mouse.x > tile.position.x && mouse.x < tile.position.x + tile.size &&
                mouse.y > tile.position.y && mouse.y < tile.position.y + tile.size) {
                activeTile = tile;
                break
            }
        }
    })

}
