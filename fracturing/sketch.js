// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCycleInMiddle()
}
function drawCycleInMiddle() {
  background(240); // Background color

  let widestPart = max(width / 2, height / 2); // Calculate the widest part of the canvas

  let cycleDiameter = widestPart * 2; // Diameter of the cycle

  // Draw the cycle
   // Red color
  
  ellipse(width / 2, height / 2, cycleDiameter, cycleDiameter);
}