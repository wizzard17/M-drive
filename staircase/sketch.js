// Project Title
// Rurik
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x=0
let y
let totheleft=0
let randomenumber
let flagY
let flagx


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

background(220)
y=height

staircase(.1,500);
drawFlag(flagx,flagY)
totheleft+=1
x-=totheleft

  
  
}
function staircase(w,maxheight){
  let flagheight=0// resets flag max height so it can find the new spot
  //loop to print the terain
  for (let time = 0; x < width; time+=.005){
    if(x>0){
      //makes the rectangle and height using noise
      randomenumber=noise(time)
      h=map(randomenumber,0,1,1,maxheight)
      rect(x,y-h,w,h)
      //keeps track of the heighst point
      if (h>flagheight){
        flagheight=h
        flagY=height-h
        flagx=x
      }
      
    }
    //moves the x position to the right 
    x+=w
  }
  x=0
}
//prints a flag 
function drawFlag(x,y){
  y-=5
  fill("white")
  rect(x,y,1,10)
  fill("red")
  triangle(x,y,x,y-5,x+5,y-(5/2))
}