

let images = [];
let imageNames = ['white', 'red', 'green', 'yellow', 'blue'];
let player1
let player2
let futureblocks=[]
let blockstypelist=[]
function preload() {
  // Load each image and store it in the images array
  for (let i = 0; i < imageNames.length; i++) {
    images[i] = loadImage('assets/' + imageNames[i] + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player1 =new DrawGrid(50, 50,0,0);
  player2 =new DrawGrid(50, 50,width-50*6,0);
  for(let x = 1000; x>0; x--){
    blockstypelist.push(round(random(1,4)))
  }

}

function draw() {
  background(220);
  player1.drawGrid()
  player1.control()
  player1.falling()
  player2.drawGrid()
  player2.control()
  player2.falling()
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
    this.gridX = gridX
    this.gridY = gridY
    this.blockNumber=0
    this.dropper = new Drop(this.gridData,5,0 ,2,2,this)

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

    if(this.dropper.delete===true){
      this.dropper= new Drop(this.gridData,5,0 ,blockstypelist[this.blockNumber],blockstypelist[this.blockNumber+1],this.rectHeight,this.rectWidth)
      this.blockNumber+=2
    }
    this.dropper.display(this.gridX,this.gridY)
    this.dropper.freeze()
    this.dropper.move()








  }
  lose(){
    if(this.gridData[0,3]>0){
      console.log('you lose')
    }
  }
  falling(){
    let numRows = this.gridData.length;
    let numCols = this.gridData[0].length;
    for (let y = 12; y >=0; y--) {
      for (let x = 12; x >=0;  x--) {
        if(y<12){  
          if(this.gridData[y][x]!==0&&this.gridData[y+1][x]===0){
          
            this.gridData[y+1][x]=this.gridData[y][x]
            this.gridData[y][x]=0
          }
          
          
          
        }

      }
    }
  }




}
class Drop{
  constructor(gridData,x,y,block1type,block2type,rectHeight,rectWidth){
    this.block1x=3;
    this.block2x=3;
    this.block1y=0;
    this.block2y=-1;
    this.gridData=gridData
    this.block1type=block1type;
    this.block2type=block2type;
    this.timer=50
    this.delete=false
    this.pos=3
    this.rectHeight= rectHeight
    this.rectWidth= rectWidth
  }
  blockhere(){


  }
  freeze() {
    // Check if block1 should freeze
    if (this.block1y === 12 || (this.block1y < 12 && this.gridData[this.block1y + 1][this.block1x] > 0)||(this.block2y === 12 || (this.block2y < 12 && player1.gridData[this.block2y + 1][this.block2x] > 0))) {
      this.gridData[this.block1y][this.block1x] = this.block1type;
      this.gridData[this.block2y][this.block2x] = this.block2type;
      this.delete = true;
    }
    /*
    // Check if block2 should freeze
    if (this.block2y === 12 || (this.block2y < 12 && player1.gridData[this.block2y + 1][this.block2x] > 0)) {
      player1.gridData[this.block2y][this.block2x] = this.block2type;
      this.delete = true;
    }
    */
    // If both blocks are frozen, mark as delete
    if ((this.block1y === 12 || this.gridData[this.block1y + 1][this.block1x] > 0) &&
        (this.block2y === 12 || this.gridData[this.block2y + 1][this.block2x] > 0)) {
      
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
  sidemoveleft(){
    if (this.gridData[this.block1y][this.block1x-1]===0&&this.block1x>0){
      if (this.gridData[this.block2y][this.block2x-1]===0&&this.block2x>0){
        this.block1x-=1
        this.block2x-=1
        
      }
    }
  }
  sidemoveright(){
    if (this.gridData[this.block1y][this.block1x+1]===0&&this.block1x<5){
      if (this.gridData[this.block2y][this.block2x+1]===0&&this.block2x<5){
        this.block1x+=1
        this.block2x+=1
        
      }
    }
  }


  display(x,y){
    console.log(this.block1x)
    push()
    translate(x,y)
   
        // Check if the image index is within bounds of the images array

    image(images[this.block1type],this.block1x * this.rectWidth, ((this.block1y+1)* this.rectHeight)-this.rectHeight*(this.timer)/50, this.rectWidth, this.rectHeight);
    image(images[this.block2type],this.block2x * this.rectWidth, ((this.block2y+1)* this.rectHeight)-this.rectHeight*(this.timer)/50, this.rectWidth, this.rectHeight);

    //rect(this.block1x * player1.rectWidth, this.block1y*player1.rectHeight, player1.rectWidth, player1.rectHeight)
    pop()
    
  }
  swapPos(){
    this.pos+=1
    if(this.pos>4){
      this.pos=1
    }
    if(this.pos===1){
      this.block2x=this.block1x
      this.block2y=this.block1y+1

    }
    if(this.pos===2){
      this.block2x=this.block1x+1
      this.block2y=this.block1y

    }
    if(this.pos===3){
      this.block2x=this.block1x
      this.block2y=this.block1y-1

    }
    if(this.pos===4){
      this.block2x=this.block1x-1
      this.block2y=this.block1y

    }




  }




}
function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    player1.dropper.sidemoveleft();
  }
  if (keyCode === RIGHT_ARROW) {
    player1.dropper.sidemoveright();
  }
  if (keyCode === 88) {
    player1.dropper.swapPos()
  }
}
