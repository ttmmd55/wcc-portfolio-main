let row,cols;
let scl=10;
let wavesValue=[];
let move=0;

function setup() {
  createCanvas(600,600, WEBGL);

  let w=600;
  let h=600;
  cols=w/scl;
  row=h/scl;
  
}

function draw() {
  background(255);
  
push();
  let r = random(100);
  translate(-width/2+r,-height/2+r);
for (let i = 0; i < 600; i+=r*2) {
  for(let j = 0; j < 600; j+=r*2) {
    noStroke();
    fill(r * 5,r * 5,r * 5,10);
    circle(i, j, r);
  }
}
  frameRate(20);
pop();
 
  rotateZ(frameCount / 300);
  Wave();
 
}

function Wave(){
  // Make the waves move
  move+=0.02;
  let yoff=move;
  for(let y=0;y<row;y++){
    wavesValue.push([]);
    let xoff=0;
  for(let x=0;x<cols;x++){
    wavesValue[y][x] = map(noise(xoff,yoff),0,1,-200,200);
    xoff+=0.05;
    } 
    yoff+=0.05;
  }
  
  //Create Waves
  push();
  noStroke();
  
  //change rgb
  let r = map(sin(frameCount),-1,1,50,255);
  let g = map(cos(frameCount/2),-1,1,50,255);
  let b = map(sin(frameCount/4),-1,1,50,255);
  fill(r,g,b,80);
  translate(0, 0, sin(frameCount / 10 ) * 65);
  for(let y=0;y<row;y+=10){
    for(let x=0;x<cols;x+=10){
      box(x*scl,y*scl,wavesValue[x][y]);
    }
  }
}