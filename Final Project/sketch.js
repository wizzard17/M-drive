

let images = [];
let imageNames = ['white', 'red', 'green', 'yellow', 'blue'];
let player1 
function preload() {
  // Load each image and store it in the images array
  for (let i = 0; i < imageNames.length; i++) {
    images[i] = loadImage('assets/' + imageNames[i] + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player1 =new DrawGrid(50, 50);

}

function draw() {
  background(220);
  player1.drawGrid()
}

class DrawGrid {
  constructor(rectWidth, rectHeight, gridX, gridY) {
    this.gridData = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.gridX = width / 2 - (this.gridData[0].length * 25);
    this.gridY = height / 2 - (this.gridData.length * 25);
  }

  drawGrid() {
    push();
    translate(this.gridX, this.gridY);
    let numRows = this.gridData.length;
    let numCols = this.gridData[0].length;
    
    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        let imgIndex = this.gridData[y][x];
        
        // Check if the image index is within bounds of the images array
        if (imgIndex >= 0 && imgIndex < images.length) {
          image(images[imgIndex], x * this.rectWidth, y * this.rectHeight, this.rectWidth, this.rectHeight);
        } else {
          console.error(`Image index ${imgIndex} out of bounds at grid position (${y}, ${x})`);
        }
      }
    }
    
    pop();
  }

  




}
class Drop{
  constructor(block1x,block1y,block2x,block2y,gridData,block1type,block2type){
    this.block1x=block1x;
    this.block2x=block2x;
    this.block1y=block1y;
    this.block2y=block2y;
    this.gridData=gridData;
    this.block1type=block1type;
    this.block2type=block2type;
  }
  blockhere(){


  }
  freeze(){
    if (this.gridData[this.block1y-1][this.block1x]>0){
      this.gridData[this.block1y][this.block1x]=this.block1type;
    }
    if (this.gridData[this.block2y-1][this.block2x]>0){
      this.gridData[this.block1y][this.block1x]=this.block1type;
    }
  }

}