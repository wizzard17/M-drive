// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  angleMode(DEGREES)
}


function draw() {
  translate(width/2,height/2)
  randomELment(1000)
}
function randomELment(curentlen){
  push();
  
  while(curentlen>5){
    rotate(random(180));
    square(0,curentlen,30);
    translate(0,curentlen);
    curentlen*=.75;
  }
  pop()
}
