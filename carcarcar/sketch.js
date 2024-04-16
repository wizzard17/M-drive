// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB)
  for(let i=0;i<20;i++){ 
    cars.push(new Car(5,"white"));
  }
}
function mouseClicked(){
  //trigger on a full press/release mouse interaction
  cars.push(new Car(5,random(360)));
 
}

function draw() {
  background("Black");
  for(let p of cars){ 
    
    p.move();
    p.display();
    p.speedDown()
    p.speedUp()
  }
}

class Car{
  constructor(speed,color){
    this.x=(random(width));
    this.y=random(height);
    this.speed=speed;
    this.cartype=round(random(1),0)
    this.color=color;
  }
  move(){
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
    fill(this.color)
    rectMode(CENTER)
    if(this.cartype===1){
      rect(this.x,this.y,30,50)
    }
    else{
      circle(this.x,this.y,50)

    }
  }
  speedUp(){
    let chance =round(random(100))
    if (chance===1){
      if (this.speed<10){
        this.speed+=5
      }
    }
  }
  speedDown(){
    let chance =round(random(100))
    if (chance===2){
      if (this.speed>0){
        this.speed-=5
      }
    }
  }
}