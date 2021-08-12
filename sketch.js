var bg,bgImage
var sleep
var brush 
var gym, gym1;
var eat 
var drink 
var move
var astronaut


function preload(){
  bgImage = loadImage("images/iss.png")
  sleep = loadImage("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png","images/gym11.png","images/gym11.png","images/gym12.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink1.png","images/drink2.png","images/drink2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png");
 move = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png");
}




function setup() {
  createCanvas(600, 500);
  
  bg=createSprite(300,250); 
  bg.addImage(bgImage);
  bg.scale=0.17;
  
  astronaut=createSprite(300,230);
  astronaut.addImage("sleeping",sleep);
  astronaut.scale=0.1;
  
}

function draw() {
  background(220);
  drawSprites();
  
  textSize(15);
  fill("white");
  text("Instructions:",5,15);
  text("Up Arrow= Brushing",5,30);
  text("Down Arrow= Gyming",5,45);
  text("Left Arrow= Eating",5,62);
  text("D key = Drinking",5,79);
  text("Right Arrow= Bathing ", 5,96);
  text("M key = Moving",5,113);
    text("S key = Sleeping",5,130);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 400
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 100;
    astronaut.y = 250;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("M")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1.5;
    astronaut.velocityY = 1.5;
  }

  if(keyDown("S")){
    astronaut.addAnimation("sleeping", sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("D")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

}