
var sea, seaImg;
var ship, shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}


function setup(){
  createCanvas(400,400);
  sea = createSprite (300, 180,  600, 20);
  ship = createSprite (100, 300, 10, 50);

  ship.addAnimation("Img", shipImg);
  ship.scale=0.2;
  ship.x=50;
}

function draw() {
  background("blue");
  drawSprites();

  sea.addImage("sea", seaImg)
  sea.velocityX=-2
  console.log(sea.x)

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}
