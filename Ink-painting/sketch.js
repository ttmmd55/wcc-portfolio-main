  //setup our global variables
  let x
  let y
  let amt

function setup() {
  createCanvas(600, 400);
  
  //draw a background not be loop
  background(240);
}

function draw() {
  // pick a number to use as a range
  let range = frameCount % 120;
  
  //update new variables
  let xA=x+random(-amt,amt);
  let yA=y+random(-amt,amt);
  
  //get some random circle to combine a new Pattern;
  fill(0,5,random(128,255),random(50,70));
  noStroke();
  ellipse(x,y,random(-range,range),random(-range,range));
  
  //upadte the global variables
  x=xA;
  y=yA;
}

function mousePressed(){
  //when the mouse is clicked, the graphic starts to be generated
  x=mouseX;
  y=mouseY;
  amt=(2,20);
}