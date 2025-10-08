let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('kalem.gif');
}


function setup() {
  createCanvas(1174, 705);

  image(img, 0, 0);

  colorMode(HSB);

  // Set angle mode so that atan2() returns angles in degrees
  angleMode(DEGREES);

  describe('Two eyes that follow the cursor.');
}

function draw() {
  background(img);

  // Draw left eye

  let leftX = 550;
  let leftY = 350;

  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);
  ellipse(0, 0, 50, 50);
  rotate(leftAngle);
  fill(0);
  ellipse(12.5, 0, 25, 25);
  pop();

  // Draw right eye

  let rightX = 675;
  let rightY = 350;

  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(255);
  ellipse(0, 0, 50, 50);
  rotate(rightAngle);
  fill(0);
  ellipse(12.5, 0, 25, 25);
  pop();
}
