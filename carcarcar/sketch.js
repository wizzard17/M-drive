// Cars Cars Cars
// Rurik 
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let carseast = [];
let carswest = [];
let roadwide
let colorwheel=["yellow","blue","green","red","lightblue"]
function setup() {
  createCanvas(windowWidth, windowHeight);
 roadwide = height-300
  
  for(let i=0;i<10;i++){ 
    carswest.push(new Car(random(roadwide/2+40,roadwide-20),10,random(colorwheel)));
    carseast.push(new Car(random(roadwide/2-40),10,random(colorwheel)));
  }
}

function mouseClicked(){
  //trigger on a full press/release mouse interaction
  if (keyIsPressed && key === 'Shift') {
    carseast.push(new Car(random(roadwide/2-40),10,random(colorwheel)));
    console.log("left")
  }
  else{
    carswest.push(new Car(random(roadwide/2+40,roadwide-20),10,random(colorwheel)));
  }
 
}

function draw() {
  background("Black");
  
  devider()
  for(let p of carswest){ 
    
    p.move();
    p.display(50,30);
    p.speedDown()
    p.speedUp()
    p.changecolor()
  }
  for(let p of carseast){ 
    
    p.move();
    p.display(50,30);
    p.speedDown()
    p.speedUp()
    p.changecolor()
  }
}

function devider(){
  for(let x=0; x<width;x+=80){
    fill("yellow");
    rect(x,(roadwide)/2,40,10);
    
    x+=40
  }
}
class Car{
  constructor(y,speed,color){
    this.x=(random(width));
    this.y=y;
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
    if(this.y>roadwide/2){
      this.x+=this.speed
    }
    else{
      this.x+=this.speed*-1
    }

  }
  display(w,h){
    
    rectMode(CENTER)
    if(this.cartype===1){
      
      rect(this.x, this.y, w, h);
      fill(this.color);
      rect(this.x, this.y, w, h);
    
      // Car roof
      fill("blue");
      rect(this.x + w * 0.1, this.y - h * 0.25, w * 0.8, h * 0.5);
    
      // Wheels
      fill(100);
      ellipse(this.x - w * 0.25, this.y + h * 0.75, w * 0.25, w * 0.25);
      ellipse(this.x + w * 0.50, this.y + h * 0.75, w * 0.25, w * 0.25);
    }
    else{
      fill(this.color)
      circle(this.x,this.y,50)

    }
  }
  speedUp(){
    let chance =round(random(100))
    if (chance===1){
      if (this.speed<15){
        this.speed+=5
      }
    }
  }
  speedDown(){
    let chance =round(random(100))
    if (chance===1){
      if (this.speed>0){
        this.speed-=5
      }
    }
  }
  changecolor(){
    if(round(random(100),0)===1){
    this.color=random(colorwheel)
    }
  }
}
class Trafficlight{
  constructor(){
    this.speed
    

  } 
  redlight(list1,list2){
    let savedspeed = this.speed
    this.speed = 0
    fo




  }
  display(){
    fill("grey")
    rect(length/2,height,100,200)
  }
}