// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gridspacing=50
let randome=0
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawlines()
}
function drawlines(){
  for(let x=0;x<width; x+=gridspacing){
    for(let y=0; y<height; y+=gridspacing){
      diaglnaldesc(x,y,gridspacing)
    }
  }
}
function diaglnaldesc(x,y,s){
  if(randome=0){
  
  }
  
  
  line(x+s/2,y-s/2,x-s/2,y+s/2)
}
