var track,trackImage;
var jack,jackAnimation;
var leftInvisibleBoundry;
var rightInvisibleBoundry;

function preload(){
  //pre-load images
  trackImage=loadImage("path.png");
  jackAnimation=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200,400,400);
  track.addImage(trackImage);
  //Moving Background//
  track.velocityY= 4;
  track.scale=1.3;
  
  // create the jack sprite//
  jack=createSprite(200,350,20,20);
  jack.addAnimation("running",jackAnimation);
  jack.scale=0.8;
  
  // creating invisible Boundries //
  leftInvisibleBoundry=createSprite(10,200,10,400);
  leftInvisibleBoundry.visible=false;
  
  rightInvisibleBoundry=createSprite(390,200,10,400);
  rightInvisibleBoundry.visible=false;
}

function draw() {
  background("SkyBlue");

  //code to repeat the background//
  if(track.y>400){
    track.y=height/2;
  }
   
  if(keyDown(LEFT_ARROW)){
    jack.velocityX=-3;
  }
  
    if(keyDown(RIGHT_ARROW)){
    jack.velocityX=3;
  }
  
  // code to collide edges //
  jack.collide(leftInvisibleBoundry);
  jack.collide(rightInvisibleBoundry);
  
  drawSprites();
  
}
