// Drawing with loops
// Rurik Lung
// 2/27/2024
let rectHeight = 10;
let spacing = 25;
let circlesize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  gradientBackground();
  nestedLoops();
}

function nestedLoops() {
  // using a loop within a loop, generate a grid arrangement
  // for some circles
  for (let x = 0; x < width; x += spacing) { //0 20 40 60 80
    for (let y = 0; y < height; y += spacing) { //0 20 40 60 80
      let d = round(circleDistance(x, y, mouseX, mouseY))
      fill(0);

      if (d > 100) {
        fill(0);
      }

      else {
        fill(255, 0, 0);
        circlesize = circlesize * 2
      }
      circle(x, y, circlesize);
      textAlign(CENTER, CENTER)
      fill(50)
      text(d, x, y,)

    }
  }
}

function gradientBackground() {
  // use a single loop to draw several rectangles
  // then color them into a gradient
  let y = 0;
  while (y < height) {
    let c = color(mouseX, map(y, 0, height, 255, 0), map(y, 0, height, 0, 255));
    fill(c);
    rect(0, y, width, rectHeight);
    y += rectHeight;
  }

}
function circleDistance(x1, y1, x2, y2) {
  let a = x1 - x2
  let b = y1 - y2
  let c = sqrt(pow(a, 2) + pow(b, 2))
  return c;
}