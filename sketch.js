let rads=[];
let colors=["#FAB3A9","#C6AD94","#7FB285","#463239","#ED6B86"]

let go=0
let size=0

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  
}

function draw() {
  background(300);


if(sin(go)<0.018 && sin(go)>-0.18){
   for(let i=0; i<360; i+=10){
    rads.push(new rad(i))
   }
}
  
for(let rad of rads){
  rad.update();
  rad.display();
}

go +=10
size+=3
noStroke()
fill(0, 50)
ellipse (width/2+3, height/2+3, 103)
fill(255)
ellipse (width/2, height/2, 100)
}

class rad{
  constructor(r){
    this.rotation=r
    this.y=0;
    this.length=5
    this.color=random(colors);
  }
  
  update(){
    this.y+=2
    if(this.y>width+height/2){
      let index = rads.indexOf(this);
      rads.splice(index, 1);
    }
    
  }
  display(){
    push();
    translate(width/2, height/2);
    rotate(this.rotation);
    stroke(this.color);
    strokeWeight(20 - 10 * sin(size));
    strokeCap(PROJECT)
    line(0, this.y+this.length, 0, this.y)
    pop();
    
  }
}

function mousePressed(){
  if(dist(mouseX, mouseY, width/2, height/2)<=50){
    for(let i=0; i<50; i++){
    rads.push(new rad(random(0, 360)))
              }
              }
}
