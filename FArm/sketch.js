// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let tiles=[]; //0 gras 1 chiken 3 star
let level = [
  [0,1,0,0,0],
  [1,0,0,1,0],
  [0,1,1,0,2],
  [0,1,0,0,0],
  [0,0,1,0,0],
]
const COLUMNS =5; const ROWS = 5; let TILE_SIZE = 100;
let playerX = 3; let playerY= 4
function preload(){
for(let i =0; i<4; i++){
  tiles.push(loadImage("assets/"+i+".png"));
}
}

function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
  
}

function draw() {
  background(220);
  renderBourd()
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    swap(playerX,playerY,playerX,playerY-1)
  }
  if(keyCode===LEFT_ARROW){
    swap(playerX,playerY,playerX-1,playerY)
  }
  if(keyCode===RIGHT_ARROW){
    swap(playerX,playerY,playerX+1,playerY)
  }
  if(keyCode===DOWN_ARROW){
    swap(playerX,playerY,playerX,playerY+1)
  }
}

function renderBourd(){
  for(let x =0; x <COLUMNS;x++){
    for(let y = 0; y<ROWS;y++){
      let type = level[y][x];
      let curentimage= tiles[type];
      image(curentimage,x*TILE_SIZE,y*TILE_SIZE);
    }
  }
}
function swap(x1,y1,x2,y2){
  let temp = level[y1][x1]
  level[y1][x1]=level[y2][x2]
  level[y2][x1]=temp

}