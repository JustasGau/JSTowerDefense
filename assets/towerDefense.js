(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("towerDefense",
{ "compressionlevel":-1,
 "height":12,
 "infinite":false,
 "layers":[
        {
         "data":[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
         "height":12,
         "id":1,
         "name":"Dirt",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 18, 19, 22, 33, 33, 33, 33, 33, 21, 19, 20, 0, 4, 5, 5, 5,
            0, 0, 0, 0, 18, 19, 20, 0, 0, 0, 0, 0, 18, 19, 20, 0, 18, 19, 19, 19,
            0, 0, 0, 0, 18, 19, 20, 0, 0, 4, 5, 5, 7, 19, 20, 0, 18, 19, 22, 33,
            5, 5, 5, 5, 7, 19, 20, 0, 0, 18, 19, 19, 19, 19, 20, 0, 18, 19, 20, 0,
            19, 19, 19, 19, 19, 19, 20, 0, 0, 18, 19, 22, 33, 33, 34, 0, 18, 19, 20, 0,
            33, 33, 33, 33, 33, 33, 34, 0, 0, 18, 19, 20, 0, 0, 0, 0, 18, 19, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 8, 5, 5, 5, 5, 7, 19, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 34, 0],
         "height":12,
         "id":2,
         "name":"Pathing",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 131,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 145,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":12,
         "id":4,
         "name":"stuff2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[89, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 119, 120, 121, 58, 0,
            103, 104, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 134, 135, 72, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147, 148, 149, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 0, 0, 0, 0, 57, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            45, 0, 0, 0, 0, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 45, 0, 0, 0, 71, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":12,
         "id":3,
         "name":"Stuff",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":5,
         "name":"Waypoints",
         "objects":[
                {
                 "class":"",
                 "height":0,
                 "id":2,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":-141.333,
                         "y":478.667
                        }, 
                        {
                         "x":346.667,
                         "y":480
                        }, 
                        {
                         "x":345.333,
                         "y":156
                        }, 
                        {
                         "x":866.667,
                         "y":150.667
                        }, 
                        {
                         "x":866.667,
                         "y":416
                        }, 
                        {
                         "x":666.667,
                         "y":420
                        }, 
                        {
                         "x":673.333,
                         "y":676
                        }, 
                        {
                         "x":1133.33,
                         "y":674.667
                        }, 
                        {
                         "x":1133.33,
                         "y":278.667
                        }, 
                        {
                         "x":1402.67,
                         "y":277.333
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":0
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 14, 0, 0, 0, 0, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 14, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":12,
         "id":6,
         "name":"Placement tiles",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":3,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.0",
 "tileheight":64,
 "tilesets":[
        {
         "firstgid":1,
         "source":"tileset.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.9",
 "width":20
});