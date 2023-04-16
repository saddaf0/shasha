var horseTrack , horseTrackImg
var horse , horseImg , horseRun
var obstaclesGroup

function preload(){
  horseTrackImg = loadImage("track.jpg");
 horseImg = loadAnimation("horse.png");
 horseRunning=loadAnimation("horse.png","h.png")
 
}

function setup() {
  createCanvas(windowWidth , windowHeight);
  //horseTrack = createSprite(width,height)
  //horseTrack.addImage("track" , horseTrackImg)
  horse = createSprite(150 , height/2)
  horse.addAnimation("horse",horseImg);
  horse.addAnimation("h",horseRunning);
  horse.scale = 1

}

function draw() {
  background(255,255,255);  
  image(horseTrackImg,0,0,width*6,height)

  if(keyDown("right")){
   horse.changeAnimation("h",horseRunning)
   horse.x+=10

  }

 
  if(keyDown("up")){
    horse.changeAnimation("h",horseRunning)
    horse.y-=5
 
   }

   if(keyDown("down")){
    horse.changeAnimation("h",horseRunning)
    horse.y+=5
 
   }
  camera.position.x= horse.x+600
  drawSprites();
}

