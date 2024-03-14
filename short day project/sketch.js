// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let lionR
let lionL
let pinImages=[];
let currentindex= 0
function preload(){
  //funtion use for loading stuff runs before setup etc
  lionR= loadImage("assets/lion-right.png")
  for(let i = 0;i<9;i++){
    pinImages.push(loadImage("assets/pin-0"+0+".png"))
    }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  
}

function draw() {
  background(220);
  image(lionR,mouseX,mouseY,width/2,height/2)
  pinwheel()
}
function pinwheel(){
  image(pinImages[currentindex],width/2,height/2)
  currentindex+=1

  if (currentindex>9){
    currentindex=0
  }
}