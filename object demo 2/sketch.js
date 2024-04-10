// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let points=[];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let p of points){
    p.display()
    p.move()
    
   
  }
}
function  mouseClicked(){
  points.push(new MovingPoint(mouseX,mouseY))
}
class MovingPoint{

  constructor(x,y){
    this.x=x;
    this.y=y;
    this.size=20;
    this.c = color(random(255),random(255),random(255));
    this.xTime = random(10)
    this.timeShift=0.01;
    this.maxSpeed=1;
  }
  display(){
    fill(this.c);
    noStroke();

    circle(this.x,this.y,this.size)
  }
  move(){
    let xSpeed=noise(this.xTime);
    xSpeed=map(xSpeed,0,1,-this.maxSpeed,this.maxSpeed)
    this.x+=xSpeed
    if (this.x>width){
      this.x=0
    }
    else if( this.x<0){
      this.x=width  
    }
    this.xTime+=this.timeShift
  }
}