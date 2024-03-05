// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let squaresize=20
let update= true
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  if (update===true){
    background(220);
    grid()
  }
  if(mouseIsPressed){
    update=true
    if(squaresize<width && squaresize<height)
    squaresize+=1

  }
  
}
function grid(){
  update=false
  let x
  let y
  let fillnumber=60
  let fillnumber2=0
  let fillnumber3=0
  
  for(x = 0; x < width-squaresize; x+=squaresize){
    for(y = 0; y < height-squaresize; y+=squaresize){
      fillnumber+=1
      fillnumber2+=1
      fillnumber3+=1
      let c = random(['red', 'yellow', 'blue', 'green']);
      fill(c)
      square(x,y,squaresize)
      
    }
  }
}