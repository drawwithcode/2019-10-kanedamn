var art;

function preload() {
  bg = loadImage('assets/neon.jpg');
  art = loadModel("assets/akira.obj", true); //by declaring true, the object will be rendered according to p5 reference system
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);

//move the box with the background image
  noStroke();
  translate(0, 30, -300);
//set the box and apply background image as texture
  push();
  texture(bg);
  box(width, height, 10);
  pop();

//set the variables containing the mouse positions
  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

//set the lights
  ambientLight(70, 30, 50);
  directionalLight(255, 0, 100, 0.25, 0.25, 0);
//give to pointLight the mouse variables so it moves with the cursor
  pointLight(100, 0, 255, locX, locY, 250);

//set the model
  push();
  scale(3, 3, 2);
  translate(0, 60, 100);
  rotateZ(180);
  rotateY(frameCount * 0.2);
  specularMaterial(190);
  model(art);
  pop();
}
