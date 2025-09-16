// Click and drag with the mouse to view the scene from different angles.

function setup() {
  createCanvas(100, 100, WEBGL);

  describe('A blocky C shape drawn in red, blue, and green on a gray background.');
}

function draw() {
  background(200);

  // Enable orbiting with the mouse.
  orbitControl();

  // Start drawing the shape.
  // Draw a series of quadrilaterals.
  beginShape(TESS);

  // Add the vertices.
  fill('red');
  stroke('red');
  vertex(-20, -30, 0);
  vertex(30, -10, 0);
  vertex(30, -10, 0);
  fill('green');
  stroke('green');
  vertex(-10, -20, 0);
  vertex(-10, 10, 0);
  vertex(40, 10, 0);
  fill('blue');
  stroke('blue');
  vertex(30, 30, 0);
  vertex(-30, 50, 0);

  // Stop drawing the shape.
  // Connect the first and last vertices.
  endShape(CLOSE);
}