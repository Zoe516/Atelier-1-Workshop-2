let gif;
let gif2;
let apex;
let myColor;
let movingX;  //to move the front image (not being used now)
let movingY;  //to move the front image down

function preload(){
  gif = loadImage('kalem.gif');
  gif2 = loadImage('Cat.gif');
}

function setup() {
  //lockGestures();
  createCanvas(gif.width, gif.height);
  colorMode(HSB);
  // Set angle mode so that atan2() returns angles in degrees
  angleMode(DEGREES);
  apex = gif;

  describe('Two eyes that follow the cursor.');
  myColor = color(0,0,0);
  movingX = 0;  //set the start values of x
  movingY = 0;  //set the start values of y
}

function draw() {
  //apex = gif;
  
  //background(apex);  
 
  //back image
  image(gif, 0, 0, gif.width, gif.height);
  //front image
  image(gif2, movingX, movingY, gif.width, gif.height);
  
  
  
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
  fill(myColor);
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
  fill(myColor);
  ellipse(50, 0, 100, 100);
  pop();
}

function deviceShaken(){
  myColor = color(random(360), 80, 80);
  //if(apex == gif)
  //  apex = gif2;
  //else
  //  apex = gif;
  movingY = movingY + 10;  //move the front image down
  background(255);
 
}

