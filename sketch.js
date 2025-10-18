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

  describe('Two eyes that follow the cursor.');
  myColor = color(0,0,0);
  movingX = 0;  //set the start values of x
  movingY = 0;  //set the start values of y

  // Create a button to request motion permissions
  let button = createButton('Enable Motion Sensors');
  button.position(width / 2 - button.width / 2, height / 2);
  button.mousePressed(requestMotionPermission);
}

function draw() {
  //apex = gif;
  
  //background(apex);  
 
  //back image
  image(gif, 0, 0, gif.width, gif.height);
  //front image
  image(gif2, movingX, movingY, gif.width, gif.height);
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