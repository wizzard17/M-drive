// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=100
let y=100
let momentume=0
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  movingsquare(1110,550)
  
}

function movingsquare(h,w){
  rect(x,y,w,h)
  console.log(momentume)  
  
  if(y===height-h){
    momentume=0
  }
  else if(mouseIsPressed && mouseinrect(h,w)===true){
    x=mouseX-(w/2)
    y=mouseY-(h/2)
    rect(x,y,w,h)
    momentume=0
  }
  else if(y+h<height){
    momentume +=1
    y+=momentume

  }
  

}
function mouseinrect(h,w){
  if((mouseX>x && mouseX<x+w)&&(mouseY>y && mouseY<y+h)){
    return true
  }
  else{
    return false
  }

}