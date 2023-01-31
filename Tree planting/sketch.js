
  

function setup() {
  createCanvas(800, 300,WEBGL);
  background(0);
  //let len=10;
  
  img = loadImage('fruit.jpg')
  
  
}

function draw() {
  translate(-400,-100)
  drawTree(); 
  
  addGUI();
}

function drawTree(){
  let bLen = random(20,100);
  let bAng = PI*0.5;
  
  push();
  translate(random(800), 100);
  branch(bLen, bAng); // initial length and facing up
  pop();
  
}

function branch(len,theta){
  push();
  rotate(theta);
  noStroke();
  texture(img);
  circle(0,0,len); 
  translate(len,0);
 
  
  if(len>6){
    let newAng = random(PI*0.25); // create new angle
    let newLen = len * random(0.4,0.8); // create new length
    branch(len * random(0.2,0.4), - newAng); // left branch
    branch(len * random(0.2,0.4), newAng);   // right branch
  }else{
   fill(255,100,0,20);
   rect(0,0,len*10,len*10);
  }
  pop();
}

function addGUI(){

  //add a button
  button = createButton("plante");

  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress); 

}

function handleButtonPress()
{
    if(food.length == 0 && !button.hasClass("inactive")){
      food.push({
          x:random(width),
          y:random(height/2),
          d:random(5,20)
        });
    }
    
    if(food.length > 0){
      button.html("PLANTING");
      button.addClass("inactive");
    }
  
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}