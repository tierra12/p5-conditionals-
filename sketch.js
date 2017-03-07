var x = 0;
var speed = 50;

function setup(){
    createCanvas(600,400);
    
}

function draw(){
    background(50);
   //i wrote this so background changes to blue when clicked 
    if(mouseX>300){
        background(65,107,244);
    }
  //make outline white, 6px thick no color inside shapes 
  stroke(255);
  strokeWeight(6);
  noFill();
  
  if(mouseY<150){
      fill(244,65,184);
  }
   else{
       noFill();
   }
  
  //a circle 
  ellipse(x,200,100,100);
// this code is going to get the cirle to move on its own
 if(x>width|| x <0){
     console.log("CRICLE IS OFF THE SCREEN")
     speed = speed * -1; 
 }
  x = x + speed; 
 console.log(x);
}
