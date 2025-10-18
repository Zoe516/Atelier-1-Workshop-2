let gif;
let gif2;
let apex;
let myColor;
let movingX;  //to move the front image (not being used now)
let movingY;  //to move the front image down

function preload(){
  gif = loadImage('pumpkin.gif');
  gif2 = loadImage('ghost.gif');
}

function setup() {
  lockGestures();
  createCanvas(gif.width*2, gif.height*2);
  colorMode(HSB);
  // Set angle mode so that atan2() returns angles in degrees
  angleMode(DEGREES);
  apex = gif;
  movingX = 0;  //set the start values of x
  movingY = 0; 

  // Create a button to request motion permissions
  let button = createButton('Enable Motion Sensors');
  button.position(width / 2 - button.width / 2, height / 2);
  button.mousePressed(requestMotionPermission);
  textSize(16);
  fill(255);
  stroke(0);
  strokeWeight(2);
}

function draw() {
  //apex = gif;
  
  //background(apex);  
 
  //back image
  image(gif, 0, 0, gif.width, gif.height);
  //front image
  image(gif2, movingX, movingY, gif.width, gif.height);
  text('Shake your device to reveal', 5, height - 700);
  text('whats underneath the ghost sheet!', 5, height - 680);
}

function deviceShaken(){
  movingY = movingY - 10;  //move the front image up
  background(255);
 
}


    // Function to request motion permissions on iOS devices
    function requestMotionPermission() {
      // Check if the DeviceMotionEvent.requestPermission function exists (iOS 13+)
      if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              console.log('Motion sensor access granted.');
            } else {
              console.log('Motion sensor access denied.');
            }
          })
          .catch(console.error);
      } else {
        // Handle older iOS versions or other browsers where permission isn't required
        console.log('DeviceMotionEvent.requestPermission not available or not needed.');
      }
    }