// Project Title
// Rurik
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x=0;
let y;
let totheleft=0;
let randomenumber;
let flagY;
let flagx;
let wide = 1;
let multiply=10;
let totalaverage;
let average;
let amoutmade=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {

background(220);
y=height;
staircase(wide,height/2,"black");
drawFlag(flagx,flagY);
if(keyIsPressed&& keyCode===LEFT_ARROW&&wide<width/2){
  wide+=.1;
}
if(keyIsPressed&& keyCode===RIGHT_ARROW&&wide>1){
  wide=wide-.1;
}
}
function staircase(w,maxheight,filling){
  let flagheight=0;// resets flag max height so it can find the new spot
  //loop to print the terain
  
  totalaverage=0;
  amoutmade=0;
  
  for (let time = totheleft; x < width; time+=.05){
    
    
    
    //makes the rectangle and height using noise
    randomenumber=noise(time);
    h=map(randomenumber,0,1,1,maxheight);
    fill("grey");
    rectMode(CORNER);
    rect(x,y-h,w,h);
    //keeps track of the heighst point
    totalaverage+=h;
    amoutmade+=1;
    if (h>flagheight){
      flagheight=h;
      flagY=height-h;
      flagx=x;
    }
      
    
    //moves the x position to the right 
    x+=w
  }
  //gets average and place's the rectangle at the average
  average=totalaverage/amoutmade
  fill("red");
  rectMode(CENTER);
  rect(0,height-average,width*2,20);
  x=0;
  totheleft+=.05;
  
}
//prints a flag 
function drawFlag(x,y){
  y-=5
  fill("white");
  rect(x,y,1,10);
  fill("red");
  triangle(x,y,x,y-5,x+5,y-(5/2));
}