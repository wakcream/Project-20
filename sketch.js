var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 40, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = -5;

  movingRect = createSprite(200,200,50,40);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 5;

}

function draw() {
  background(255,255,255);  

//movingRect.x = World.mouseX;
//movingRect.y = World.mouseY;



if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
 // && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
fixedRect.shapeColor = "red";
movingRect.shapeColor = "red";
fixedRect.velocityX = fixedRect.velocityX * (-1);
movingRect.velocityX = movingRect.velocityX * (-1);

}

else{
fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";
}










  drawSprites();
}