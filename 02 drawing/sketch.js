// Drawing with loops
// Rurik Lung
// 2/27/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(220)
  cornersAndMouse()
}
function cornersAndMouse(){
  circle(0+width*.05,0+height*.05,50)
  circle(0+width*.05,height-height*.05,50)
  circle(width-width*.05,0+height*.05,50)
  circle(width-width*0.05,height-height*0.05,50)
}
