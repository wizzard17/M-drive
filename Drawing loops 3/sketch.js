// Drawing with loops
// Rurik Lung
// 2/27/2024
let rectheight=50
function setup() {
  
  createCanvas(400 , 600);
  
}
function nestedLoops(){
  let spacing=20
  for(let x=0; x<100;x+=spacing){
    for(let y=0;y<100; y+=spacing)
    createConvolver(x,y,20)
  }
}



function draw() {
  background(220);
  nestedLoops()
}
function rectangleacross(){
  let i=0
  while(height>i){
    fill(c);

    rect(0,i,width,rectheight);
    i+=rectheight
  }

}


