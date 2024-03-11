// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let time=1
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill("grey")
  background(220);
  rect(0,0,width/2,height/2)
  donut(width/4,height/4)
}

function donut(x,y){
  let randomenumber=map(noise(time),50,100,50,300)
  fill("blue")
  circle(x,y,randomenumber)
  fill("white")
  circle(x,y,randomenumber-1000)
  time+=1
}
