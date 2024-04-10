// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
/*
let racer1 =new Racer(height/2,"red")

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  racer1.move()
  racer1.display()
}

class Racer{
  constructor(yPosition,color){
    this.speed = random(1,20);
    this.color=color;
    this.x=0;
    this.yPosition=yPosition;

  }
  display(){
    rectMode(CENTER);
    fill(this.color);
    square(this.x, this.yPosition, 20);
  }
  move(){
    this.x+=this.speed;
    if(x>width){
      this.x=0;
    }
  }
}
*/
let racers = [];
const NUM_racers = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //set up some walker objects
  for(let i = 0; i < NUM_racers; i++){
    let c = color(random(255),random(255),random(255));
    racers.push(new Walker(random(height/2+100,height/2-100),c));
  }
  noStroke();
  background(0);
}

function draw() {
  background(220);
  for(let w of racers){
    w.move();
    w.display();
  }
}


class Walker {

  // Constructor
  constructor(y, c){
    this.x = 0;   
    this.y = y;    
    this.c = c;
    this.speed = random(2,10);
    this.size = 5;
  }

  // Class Methods
  display(){
    rectMode(CENTER);
    fill(this.c);
    square(this.x, this.y, this.size);
  }

  move(){
    
    this.x+=this.speed;
    if(this.x>width){
      this.x=0;
    }
  }
}