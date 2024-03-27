// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill("grey")
  noStroke()
  rectCircle()
 
}

function draw() {
  ;
  
  
}
function rectCircle(){
  translate(width/2,height/2)
  for (let i = 0;i<300;i++){
    let x = random(-200,200)
    let y = random(-200,200)
    let range =Math.sqrt((x*x)+(y*y), 2);
    let wide
    let high
    if(range <200){
      let correctsize=false;
      while(correctsize===false){
        wide = random(5,35)
        high = random(5,35)
        if((wide<=7&&high>=10)||(high<=7&&wide>=10)||(wide<=10&&high<=10)){
          correctsize=true;
        }
      }
      rect(x,y,wide,high)
    }
    else{
      i-=1
    }
    
   
  }
}