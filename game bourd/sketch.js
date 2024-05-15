//Insert your Comment Header here.
let square = true
let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,255],
                [0,0,0,255,0],
                [0,0,0,0,0]];
let win= false



function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
}

function draw() {
  background(220);
  drawGrid();
  determineActiveSquare();   //figure out which tile the mouse cursor is over
         
  win=wincheck()        //render the current game board to the screen (and the overlay)
  if(win===true){
    background(220);
    text(" WIN", 50, 50);
  }
  selectedsquare()
}



function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if(keyIsDown(SHIFT)){
    flip(currentCol, currentRow);
  }
  else if(square===false){

  
  flip(currentCol-1, currentRow);
  flip(currentCol+1, currentRow);
  flip(currentCol, currentRow-1);
  flip(currentCol, currentRow+1);
  flip(currentCol, currentRow);
  }
  else{
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol+1, currentRow-1);
    flip(currentCol, currentRow);
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;

      
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
 
  currentCol = int(mouseX / rectWidth);
  
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}
function wincheck(){
  let colorofbox1 =gridData[0][0]
  let colorofbox
   for(let i=0; i<gridData.length; i++){
    for(let j=0; j<gridData[0].length; j++){
      colorofbox =gridData[i][j]
      if(colorofbox !== colorofbox1){
        return false
      }
    }
   }
   return true
}
function selectedsquare(){
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      if(y===currentRow+1 &&x === currentCol||y===currentRow-1 &&x === currentCol||y===currentRow &&x === currentCol+1 || y===currentRow && x === currentCol-1){
        fill(150,200,50,70); 
        rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
      }
      
    }
  }
}
