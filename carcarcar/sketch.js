// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function mouseClicked(){
  //trigger on a full press/release mouse interaction
  cars.push(new Car(5));
}

function draw() {
  background("Black");
  for(let p of cars){ 
    
    p.move();
    p.display();
  }
}

class Car{
  constructor(speed){
    this.x=(width/2);
    this.y=random(height);
    this.speed=speed;
    this.cartype=round(random(1),0)
  }
  move(){
    console.log(this.cartype)
    if(this.x<0-20){
      this.x=width+20
    }
    if(this.x>width+20){
      this.x=0-20
    }
    if(this.y>height/2){
      this.x+=this.speed
      
      
    }
    else{
      this.x+=this.speed*-1
      
    }

  }
  display(){
    rectMode(CENTER)
    if(this.cartype===1){
      rect(this.x,this.y,30,50)
    }
    else{
      circle(this.x,this.y,50)

    }
  }
}