

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
  player1.control()
}

class DrawGrid {
  constructor(rectWidth, rectHeight, gridX, gridY) {
    this.gridData = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 3, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 0, 0],
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

    this.dropper= new Drop(this.gridData,this.gridX,this.gridY ,1,2)

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
  control(){
    this.dropper.freeze()
    this.dropper.move()
    this.dropper.display()







  }

  




}
class Drop{
  constructor(gridData,x,y,block1type,block2type){
    this.block1x=3;
    this.block2x=3;
    this.block1y=0;
    this.block2y=-1;
    this.gridData=gridData;
    this.block1type=block1type;
    this.block2type=block2type;
    this.timer=50
    this.x=x
    this.y=y
  }
  blockhere(){


  }
  freeze(){
    if (this.gridData[this.block1y+1][this.block1x]>0||this.block1y===12){
      this.gridData[this.block1y][this.block1x]=this.block1type;
    }
    if (this.gridData[this.block2y+1][this.block2x]>0||this.block2y===12){
      this.gridData[this.block1y][this.block1x]=this.block1type;
    }
  }
  move(){
    this.timer-=1
    if(this.timer===0){
      this.block1y+=1
      this.block2y+=1
      this.timer=5
    }
  }
  display(){
    let numRows = this.gridData.length;
    let numCols = this.gridData[0].length;
    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        if (this.block1y===y||this.block2y===y){
        let imgIndex = this.block1type;
        // Check if the image index is within bounds of the images array
        if (imgIndex >= 0 && imgIndex < images.length) {
          image(images[imgIndex], this.block1x * this.rectWidth, (this.block1y -1* this.rectHeight) (y/this.timer), this.rectWidth, this.rectHeight);
        } else {
          console.error(`Image index ${imgIndex} out of bounds at grid position (${y}, ${x})`);
        }
      }
      }
    }
  }

}