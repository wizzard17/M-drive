// Final Project
// Rurik Lung
// 6/23/2024

let images = [];
let imageNames = ['white', 'red', 'green', 'yellow', 'blue', 'red_orb', 'green_orb', 'yellow_orb', 'blue_orb'];
// white 0
// red 1 ,orb 5
// green 2, orb 6,
// yellow 3, orb 7
// blue 4 orb 

let listofblocks = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4];
let player1;
let player2;
let blockstypelist = [];

function preload() {
  // Load each image and store it in an array
  for (let i = 0; i < imageNames.length; i++) {
    images[i] = loadImage('assets/' + imageNames[i] + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // creates random list of blocks to be used
  for (let x = 1000; x > 0; x--) {
    blockstypelist.push(random(listofblocks));
  }
  // creates classes
  player1 = new DrawGrid(50, 50, 0, 0);
  player2 = new DrawGrid(50, 50, width - 50 * 6, 0);
}

function draw() {
  background(220);
  // goes through functions and checks if anyone's lost
  if (player1.loss === false && player2.loss === false) {
    player1.drawGrid();
    player1.control();
    player1.falling();
    player1.break();
    player1.lose();

    player2.drawGrid();
    player2.control();
    player2.falling();
    player2.break();
    player2.lose();
  }
  if (player1.loss === true) {
    background(220);
    text("Player1 loses!", width / 2, height / 2);
  } else if (player2.loss === true) {
    background(220);
    text("Player2 loses!", width / 2, height / 2);
  }
}

class DrawGrid {
  constructor(rectWidth, rectHeight, gridX, gridY, nextblock) {
    // grid for the game board
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
    this.loss = false;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.gridX = gridX;
    this.gridY = gridY;
    this.blockNumber = 0; // keeps track of what block the player is on in the list
    // stores the class for the blocks that fall down the screen
    this.dropper = new Drop(this.gridData, 5, 0, blockstypelist[this.blockNumber], blockstypelist[this.blockNumber + 1], this.rectHeight, this.rectWidth);
  }

  drawGrid() {
    // draws the grid
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

  control() {
    // runs the dropper class with deleting it every time the blocks have been placed
    if (this.loss === false) {
      if (this.dropper.delete === true) {
        this.blockNumber += 2;
        this.lose();
        if (this.loss === false) {
          this.dropper = new Drop(this.gridData, 5, 0, blockstypelist[this.blockNumber], blockstypelist[this.blockNumber + 1], this.rectHeight, this.rectWidth);
        }
      }
      this.dropper.display(this.gridX, this.gridY);
      this.dropper.freeze();
      this.dropper.move();
    }
  }

  lose() {
    // checks if the player lost
    if (this.gridData[0][3] > 0 && this.gridData[1][3] > 0) {
      this.loss = true;
    }
  }

  falling() {
    // logic for the blocks being affected by gravity basically just checks if there are blocks underneath and moves it down if there aren't
    let numRows = this.gridData.length;
    let numCols = this.gridData[0].length;
    for (let y = 12; y >= 0; y--) {
      for (let x = 12; x >= 0; x--) {
        if (y < 12) {
          if (this.gridData[y][x] !== 0 && this.gridData[y + 1][x] === 0) {
            this.gridData[y + 1][x] = this.gridData[y][x];
            this.gridData[y][x] = 0;
          }
        }
      }
    }
  }

  break() {
    // breaks any block that is touching an orb when it pops
    let orbtype;
    let numRows = this.gridData.length;
    let numCols = this.gridData[0].length;
    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        if (this.gridData[y][x] > 4) {
          if (this.gridData[y][x] === 5) {
            orbtype = 1;
            this.gridData[y][x] = 0;
          }
          if (this.gridData[y][x] === 6) {
            orbtype = 2;
            this.gridData[y][x] = 0;
          }
          if (this.gridData[y][x] === 7) {
            orbtype = 3;
            this.gridData[y][x] = 0;
          }
          if (this.gridData[y][x] === 8) {
            orbtype = 4;
            this.gridData[y][x] = 0;
          }
          if (x + 1 < numCols && this.gridData[y][x + 1] === orbtype) {
            this.gridData[y][x + 1] = 0;
          }
          if (x - 1 >= 0 && this.gridData[y][x - 1] === orbtype) {
            this.gridData[y][x - 1] = 0;
          }
          if (y + 1 < numRows && this.gridData[y + 1][x] === orbtype) {
            this.gridData[y + 1][x] = 0;
          }
          if (y - 1 >= 0 && this.gridData[y - 1][x] === orbtype) {
            this.gridData[y - 1][x] = 0;
          }
        }
      }
    }
  }
}

class Drop {
  constructor(gridData, x, y, block1type, block2type, rectHeight, rectWidth) {
    // controls blocks x and y positions
    this.block1x = 3;
    this.block2x = 3;
    this.block1y = 0;
    this.block2y = -1;
    // access to grid data/game board
    this.gridData = gridData;
    // tells it what blocks to use
    this.block1type = block1type;
    this.block2type = block2type;
    // timer for how long it takes the block to fall one by one
    this.timer = 50;
    // if the block has been placed it will delete it
    this.delete = false;
    //position of the block it has 4 so when the block orbits around it uses 1 to 4 to keep track
    this.pos = 3
    //just keeps track of size
    this.rectHeight = rectHeight
    this.rectWidth = rectWidth
  }

  freeze() {
    // Check if block1 or block2 should freeze and if anythings under it
    if (this.gridData[0][3] === 0 && this.gridData[1][3] === 0) {
      if (
        this.block1y === 12 || this.gridData[this.block1y + 1][this.block1x] > 0 ||
        this.block2y === 12 || this.gridData[this.block2y + 1][this.block2x] > 0
      ) {

        this.gridData[this.block1y][this.block1x] = this.block1type;
        this.gridData[this.block2y][this.block2x] = this.block2type;
        this.delete = true;
      }
    }
  }
  move() {
    //makes the block move down by 1 when the times hits 0
    this.timer -= 1;
    if (this.timer === 0) {
      this.block1y += 1;
      this.block2y += 1;
      this.timer = 50;
    }
  }
  //moves falling blocks left and right when called
  sidemoveleft() {

    if (this.gridData[this.block1y][this.block1x - 1] === 0 && this.block1x > 0) {
      if (this.gridData[this.block2y][this.block2x - 1] === 0 && this.block2x > 0) {
        this.block1x -= 1;
        this.block2x -= 1;

      }
    }
  }
  sidemoveright() {
    if (this.gridData[this.block1y][this.block1x + 1] === 0 && this.block1x < 5) {
      if (this.gridData[this.block2y][this.block2x + 1] === 0 && this.block2x < 5) {
        this.block1x += 1;
        this.block2x += 1;

      }
    }
  }


  display(x, y) {
    //displays it uses the timer and devids it to give it that smouth motion
    console.log(this.block1x);
    push();
    translate(x, y);

    // Check if the image index is within bounds of the images array

    image(images[this.block1type], this.block1x * this.rectWidth, ((this.block1y + 1) * this.rectHeight) - this.rectHeight * (this.timer) / 50, this.rectWidth, this.rectHeight);
    image(images[this.block2type], this.block2x * this.rectWidth, ((this.block2y + 1) * this.rectHeight) - this.rectHeight * (this.timer) / 50, this.rectWidth, this.rectHeight);

    //rect(this.block1x * player1.rectWidth, this.block1y*player1.rectHeight, player1.rectWidth, player1.rectHeight)
    pop();

  }
  //controls where the block is around the mian one incharge of the rotaton
  swapPos() {
    this.pos += 1
    if (this.pos > 4) {
      this.pos = 1;
    }
    if (this.pos === 1) {
      this.block2x = this.block1x;
      this.block2y = this.block1y + 1;

    }
    if (this.pos === 2) {
      this.block2x = this.block1x + 1;
      this.block2y = this.block1y;

    }
    if (this.pos === 3) {
      this.block2x = this.block1x;
      this.block2y = this.block1y - 1;

    }
    if (this.pos === 4) {
      this.block2x = this.block1x - 1;
      this.block2y = this.block1y;

    }




  }




}
function keyReleased() {
  // Player 1 controls
  if (keyCode === LEFT_ARROW) {
    player1.dropper.sidemoveleft();
  }
  if (keyCode === RIGHT_ARROW) {
    player1.dropper.sidemoveright();
  }
  if (key === 'l' || key === 'L') { // 'X' key for rotating
    player1.dropper.swapPos();
  }

  // Player 2 controls
  if (key === 'a' || key === 'A') { // 'A' key for moving left
    player2.dropper.sidemoveleft();
  }
  if (key === 'd' || key === 'D') { // 'D' key for moving right
    player2.dropper.sidemoveright();
  }
  if (keyCode === 88) { // 'L' key for rotating
    player2.dropper.swapPos();
  }
}