// Cars Cars Cars
// Rurik 
// Date
//car list
let carseast = [];
let carswest = [];

let roadwide; //for road size
let colorwheel = ["yellow", "blue", "green", "red", "lightblue"];
let traficlight;//traffic light class veriable
let timer = 0;//timer for red light

function setup() {
  createCanvas(windowWidth, windowHeight);

  roadwide = height - 300;//varuable for width of the road

  for (let i = 0; i < 10; i++) {
    //adds starting cars
    carswest.push(new Car(random(roadwide / 2 + 40, roadwide - 20), 10, random(colorwheel)));
    carseast.push(new Car(random(roadwide / 2 - 40), 10, random(colorwheel)));
  }

  traficlight = new Trafficlight();
}

function mouseClicked() {
  //adds cars
  if (keyIsPressed && key === 'Shift') {
    carseast.push(new Car(random(roadwide / 2 - 40), 10, random(colorwheel)));
    console.log("left");
  }
  else {
    carswest.push(new Car(random(roadwide / 2 + 40, roadwide - 20), 10, random(colorwheel)));
  }
}

function keyPressed() {
  // makes trafic light red
  if (key === ' ') {
    traficlight.lightred = true;
    timer = 0;
  }
}

function draw() {
  background("Black");
  devider();
  //checks if traffic light is red and has a count for 120 secs
  if (traficlight.lightred === true) {
    traficlight.redlight();
    timer += 1;
    if (timer > 120) {
      traficlight.greenlight();
      traficlight.lightred = false;
      timer = 0;
    }
  }
  //movement for the cars
  for (let p of carswest) {
    p.move();
    p.display(50, 30);
    p.speedDown();
    p.speedUp();
    p.changecolor();
  }
  for (let p of carseast) {
    p.move();
    p.display(50, 30);
    p.speedDown();
    p.speedUp();
    p.changecolor();
  }
  traficlight.display();
}

function devider() {
  for (let x = 0; x < width; x += 80) {
    fill("yellow");
    rect(x, (roadwide) / 2, 40, 10);
    x += 40;
  }
}

class Car {
  constructor(y, speed, color) {
    this.x = (random(width));
    this.y = y;
    this.speed = speed;
    this.cartype = round(random(1), 0);
    this.color = color;
    this.savedspeed;
  }
  stop() {
    this.savedspeed = this.speed;
    this.speed = 0;
  }
  go() {
    this.speed = this.savedspeed;
  }
  move() {
    if (this.x < 0 - 20) {
      this.x = width + 20;
    }
    if (this.x > width + 20) {
      this.x = 0 - 20;
    }
    if (this.y > roadwide / 2) {
      this.x += this.speed;
    }
    else {
      this.x += this.speed * -1;
    }

  }
  display(w, h) {

    rectMode(CENTER);
    if (this.cartype === 1) {

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
    else {
      fill(255, 0, 0);
      rect(this.x, this.y - 20, w, h);

      // Cabin
      fill("blue");
      rect(this.x + w - 50, this.y -20, 50, 20);

      // Wheels
      fill("grey");
      ellipse(this.x + 20, this.y + 10, 30, 30);
      ellipse(this.x + w - 80, this.y + 10, 30, 30);
    }
  }
  speedUp() {
    let chance = round(random(100));
    if (chance === 1) {
      if (this.speed < 15) {
        this.speed += 5;
      }
    }
  }
  speedDown() {
    let chance = round(random(100));
    if (chance === 1) {
      if (this.speed > 0) {
        this.speed -= 5;
      }
    }
  }
  changecolor() {
    if (round(random(100), 0) === 1) {
      this.color = random(colorwheel);
    }
  }
}

class Trafficlight {
  constructor() {
    this.lightred = false;
    this.lightcolor = "green"
  }
  redlight() {
    this.lightred = true;
    this.lightcolor = "red"
    for (let p of carswest) {
      p.stop();
    }
    for (let p of carseast) {
      p.stop();
    }
  }
  greenlight() {
    this.lightcolor = "green"
    for (let p of carswest) {
      p.go();
    }
    for (let p of carseast) {
      p.go();
    }
  }
  display() {
    fill("grey");
    rectMode(CENTER)
    rect(width / 2, height * 5 / 6, 500, 200);
    fill(this.lightcolor)
    circle(width / 2, height * 5 / 6, 200)
  }
}
