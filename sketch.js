var sanna ;

function setup() {
  createCanvas(800,400);
  
  sanna = createSprite(100,340,20,50);
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}


function draw() {
  background(255,255,255);  
  if (keyDown(LEFT_ARROW)){
    sanna.velocityX = -3;
  }
  if (keyDown(RIGHT_ARROW)){
    sanna.velocityX = 3;
  }
  if (keyDown(UP_ARROW)){
    sanna.velocityY = -3;
  }
  if (keyDown(DOWN_ARROW)){
    sanna.velocityY = 3;
  }
  if (keyDown("space")){
    sanna.velocityY = -3;
  }
  sanna.velocityY = sanna.velocityY + 0.5;
  drawSprites();
}