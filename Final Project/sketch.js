// Puzzle fighter
// Rurik Lung
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let list =[
[0,0,0,0,0,0],//13
[0,0,0,0,0,0],//12
[0,0,0,0,0,0],//11
[0,0,0,0,0,0],//10
[0,0,0,0,0,0],//9
[0,0,0,0,0,0],//8
[0,0,0,0,0,0],//7
[0,0,0,0,0,0],//6
[0,0,0,0,0,0],//5
[0,0,0,0,0,0],//3
[0,0,0,0,0,0],//3
[0,0,0,0,0,0],//2
[0,0,0,0,0,0]//1
]
let images = {};
let imageNames = ['white','red', 'green', 'yellow', 'blue'];

function preload() {
  // Load each image and store it in the images object
  for (let i = 0; i < imageNames.length; i++) {
    images[imageNames[i]] = loadImage('assets/' + imageNames[i] + '.png');
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawGrid(list,50,50,width/2,0)
  
}
function drawGrid(gridData,rectWidth,rectHeight,GridX,GridY) {
  // Render a grid of squares - fill color set according to data stored in the 2D array
  push()
  translate(GridX,GridY)
  let NUM_ROWS = gridData.length
  let  NUM_COLS= gridData[0].length
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      
      
      image(images[gridData[y][x]], x * rectWidth, y * rectHeight, rectWidth, rectHeight);
      
      
    }
  }
  pop()
}