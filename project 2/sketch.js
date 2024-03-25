// Nested loops project
// Rurik Lung
// Date 3/22/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let squaresize=20;
let update= true;//checks for updates
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //allows first update
  if (update===true){
    background(220);
    grid();
  }
  //Grows when left key
  if(keyIsPressed&&keyCode===LEFT_ARROW){
    update=true;
    if(squaresize<width/2 && squaresize<height/2){
      squaresize+=5;
    }
    

  }
  //shrinks when right key pressed and allows update
  if(keyIsPressed&&keyCode===RIGHT_ARROW){
    update=true;
    if(squaresize>=20){
      squaresize-=5;
    }
  }
}
function grid(){
  update=false;
  let x;
  let y;
  //makes grid
  for(x = 0; x < width-squaresize; x+=squaresize){
    for(y = 0; y < height-squaresize; y+=squaresize){
      //picks randome color
      let c = random(['red', 'yellow', 'blue', 'green']);
      fill(c);
      square(x,y,squaresize);
      
    }
  }
}