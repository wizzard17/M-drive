// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(220);
  cloak()
}
function cloak(){
  rectMode(CENTER)
  fill("white")
  circle(width/2,height/2,400)
  for(let i = 0;i<360;){
    
    
  
  
  rotate(degrees(i));
  fill("black");
  rect(width/2,height/2,10,100);
  i+=6
  }
}