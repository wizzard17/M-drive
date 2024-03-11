// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x=0
let y
let time=0
let update=true
let randomenumber
  let h
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (update===true){
  background(220);
  y=height
  
    staircase(.1,500)
    update=false
  }
  
  
}
function staircase(w,maxheight){
  
  for (x= 0; x < width;){
    time+=.1
    randomenumber=noise(time)
    h=map(randomenumber,0,1,1,maxheight)
    x+=w
    rect(x,y-h,w,h)
  }
  
}