

let images = [];
let imageNames = ['white', 'red', 'green', 'yellow', 'blue'];
let player1
let futureblocks=[1,2,3,1,2,1,3,1,2,1,2,3,1,3,1,2,3,1,2,1,1,3,3,1,2,1,2,1,2,1,2,2,1,3,1,3,2,1,3] 
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
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0]
    ];
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.gridX = width / 2 - (this.gridData[0].length * 25);
    this.gridY = height / 2 - (this.gridData.length * 25);

    this.dropper= new Drop(this.gridData,5,0 ,1,2)

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
    this.dropper.display(this.gridX,this.gridY)
    this.dropper.freeze()
    this.dropper.move()
    







  }

  




}
class Drop{
  constructor(gridData,x,y,block1type,block2type){
    this.block1x=3;
    this.block2x=3;
    this.block1y=0;
    this.block2y=-1;
    
    this.block1type=block1type;
    this.block2type=block2type;
    this.timer=50
  }
  blockhere(){


  }
  freeze(){
    console.log(player1.gridData[this.block1y+1][this.block1x])
    if (player1.gridData[this.block1y+1][this.block1x]>0||this.block1y===12){
      player1.gridData[this.block1y][this.block1x]=this.block1type;
    }
    if (player1.gridData[this.block2y+1][this.block2x]>0||this.block2y===12){
      player1.gridData[this.block1y][this.block1x]=this.block1type;
    }
  }
  move(){
    this.timer-=1
    if(this.timer===0){
      this.block1y+=1
      this.block2y+=1
      this.timer=50
    }
  }
  display(x,y){
    push()
    translate(x,y)
    let numRows = player1.gridData.length;
    let numCols = player1.gridData[0].length;
        // Check if the image index is within bounds of the images array

    image(images[this.block1type],this.block1x * player1.rectWidth, (this.block1y* player1.rectHeight)-player1.rectHeight/this.timer, player1.rectWidth, player1.rectHeight);
    image(images[this.block2type],this.block2x * player1.rectWidth, (this.block2y* player1.rectHeight)-, player1.rectWidth, player1.rectHeight);

    //rect(this.block1x * player1.rectWidth, this.block1y*player1.rectHeight, player1.rectWidth, player1.rectHeight)
    pop()
  }
}