let gif;
let gif2;
let apex;

function preload(){
  gif = loadImage('kalem.gif');
  gif2 = loadImage('Cat.gif');
}

function setup() {
  lockGestures();
  createCanvas(gif.width, gif.height);
  colorMode(HSB);
  // Set angle mode so that atan2() returns angles in degrees
  angleMode(DEGREES);

  describe('Two eyes that follow the cursor.');
}

function draw() {
  background(apex);
  // Draw left eye

  let leftX = 650;
  let leftY = 630;

  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);
  ellipse(0, 0, 200, 200);
  rotate(leftAngle);
  fill(0);
  ellipse(50, 0, 100, 100);
  pop();

  // Draw right eye

  let rightX = 900;
  let rightY = 630;

  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(255);
  ellipse(0, 0, 200, 200);
  rotate(rightAngle);
  fill(0);
  ellipse(50, 0, 100, 100);
  pop();
}

function touches(){
  if (touches.X >= 0 && touches.X <= 550){
    apex = gif;
  }
  if (touches.X >= 551 && touches.X <= 1100){
    apex = gif2;
  }
}

