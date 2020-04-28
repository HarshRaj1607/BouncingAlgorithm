var fixedRect, movingRect;
var object1, object2, object3, object4;


function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect  = createSprite(800,200,50,50);
  //movingRect.velocityX = -5; 
  //fixedRect.velocityX = +5;

  object1 = createSprite(100,100,50,50);
  object2 = createSprite(200,100,50,50);
  object3 = createSprite(300,100,50,50);
  object4 = createSprite(400,100,50,50);

 object1.velocityX = +5;
  object4.velocityX = -5;
}

function draw() {
  background(0,0,0,);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  
  Bouncing(object1, object4);
  drawSprites();
}
