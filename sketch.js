var fixedRect, movingRect,o1,o2;
 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
o1=createSprite(100,100,40,70);
o1.velocityX=5;

o2=createSprite(700,100,50,60);
o2.velocityX=-5

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(o1,o2)
  bounceOff(movingRect,fixedRect);

  drawSprites();
}
function bounceOff(ob1,ob2){
  if (ob1.x-ob2.x<ob1.width/2+ob2.width/2 &&
    ob2.x-ob1.x<ob2.width/2+ob1.width/2){
      ob1.velocityX=ob1.velocityX*(-1)
      ob2.velocityX=ob2.velocityX*(-1)
    }
    if(ob1.y-ob2.y<ob1.height/2+ob2.height/2 &&
      ob2.y-ob1.y<ob2.height/2+ob1.height/2){
        ob1.velocityY=ob1.velocityY*(-1)
        ob2.velocityY=ob2.velocityY*(-1)
      }
}