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
  translate(width/2,height/2)
  circle(0,0,400)
  for(let e = 0 ; e<=360;){ 
  
  angleMode(DEGREES)
  
  fill("black");
  rectMode(CENTER)
  if (e%(7.5*6)===0){
    rect(0,175,5,25);
  }
  else{
    rect(0,175,.5,25);
  }
  rotate(7.5);
  e+=7.5
  }
}