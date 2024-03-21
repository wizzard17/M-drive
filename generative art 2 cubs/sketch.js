// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSpacing = 10
let randomnum = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  
  angleMode(DEGREES)
}
function drawDisarray(){
  for(let x = 0;x<width;x+=gridSpacing){
    for(let y = 0;y<height;y+=gridSpacing){
      squareoffcet(x,y,gridSpacing)
    }
  }
}

function squareoffcet(x,y){
  push()
  
  rotate(0)
  randomnum= map(y,0,height,0,100)
  
  rotate(randomnum)
  square(x,y,gridSpacing)
  pop()
}
function draw() {
  background(220);
  drawDisarray();
}
