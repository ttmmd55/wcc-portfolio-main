let row,cols;
let scl=5;
let wavesValue=[];
let move=0;

function setup() {
  createCanvas(400,400, WEBGL);
  createEasyCam();
  document.oncontextmenu = ()=>false;
  
  let w=200;
  let h=200;
  cols=w/scl;
  row=h/scl;
}

function draw() {
  background(0,10,20);
  
  //Make the waves move
  move+=0.02;
  let yoff=move;
  for(let y=0;y<row;y++){
    wavesValue.push([]);
     let xoff=0;
  for(let x=0;x<cols;x++){
    wavesValue[y][x] = map(noise(xoff,yoff),0,1,-100,50);
    xoff+=0.05;
    } 
    yoff+=0.05;
  }
  
  //create a box
  push();
  noFill();
  stroke(230);
  rotateX(-PI/3)
  box(200);
  pop();
  
  //Create Waves
  push();
  noStroke();
  fill(0,0,255,50);
  translate(-100,-90,-50); 
  rotateX(120);
 for(let y=0;y<row;y++){
    beginShape();
  for(let x=0;x<cols;x++){
     vertex(x*scl,y*scl,wavesValue[x][y]);
     vertex(x*scl,(y+1)*scl,wavesValue[x][y+1]);
   }
   endShape();
 }
  pop();
  
  //Create a marine bottom
  push();
  fill(0,0,255);
  noStroke();
  translate(0,24,-45); 
  rotateX(-PI/3)
  box(200,100,200);
pop();
  
}
