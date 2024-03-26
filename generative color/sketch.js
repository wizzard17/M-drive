// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let colors= ["#CD5C5C","#6495ED","#DE3163"]
let rectwidth= 50;
let rectheight=1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*.1);
}

function draw() {
  
}
function drawRGB(x){
  colorMode(RGB);
  
  for(let y=0;y<height;y+=rectheight){
    let collor= map(y,0,height,360,0)
    fill(collor,360,360)
    rect(x,y,rectwidth,rectheight)
  }
}