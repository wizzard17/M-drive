// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let time=1
let x=1
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill("grey")
  background(220);
  rect(0,0,width/2,height/2)
  donut(width/4,height/4)
  time+=0.01
  speedbrick()
}

function donut(x,y){
  
  let randomenumber=map(noise(time),0,1,50,100)
  fill("blue")
  circle(x,y,randomenumber)
  fill("grey")
  circle(x,y,randomenumber-20)
  
}
function speedbrick(){
  time
  let randomenumber=map(noise(time),0,1,0,10)
  x+=randomenumber
  if (x>width){
    x=width/2
  }
  fill("black")
  rect(x,200,30,100)
}
