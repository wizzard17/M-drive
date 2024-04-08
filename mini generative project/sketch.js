// art cpoying project 
// Rurik Lung
// 3/28/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"(nothing)


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  rectMode(CENTER)
  fill("grey")
  noStroke()
  rectCircle(width/2,height/2)
 
}

function draw() {
}
function rectCircle(centerX,centerY){

  // makes it center
  translate(centerX,centerY);

  for (let i = 0;i<300;i++){
    let x = random(-200,200);
    let y = random(-200,200);
    let range =Math.sqrt((x*x)+(y*y), 2);

    //varuables for shape size
    let wide;
    let high;

    //cheacks if the shape it wants to make is in the circle area
    if(range <200){
      let correctsize=false;

      //used to check if the shape it wants to make is rectangle or square loops till it is one
      while(correctsize===false){
        wide = random(5,35);
        high = random(5,35);
        //shape check
        if((wide<=7&&high>=10)||(high<=7&&wide>=10)||(wide<=10&&high<=10)){
          correctsize=true;
        }
      }
      
      rect(x,y,wide,high);
    }

    //if it isnt in cercle area it will try again by making the queu go back by one
    else{
      i-=1;
    }
  }
}