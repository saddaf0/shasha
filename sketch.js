var bella
var bellaImg , bellaRun
var scene , sceneImg
var daisy
var daisyImg 
var score
var bone
var ball
var gameState = PLAY
var PLAY = 1
var END = 0
var obstaclesGroup



function preload(){
bellaImg = loadImage("Dog 3.png")
sceneImg = loadImage("scene garden.png")
bellaRun = loadAnimation("Dog 3.png" , "Dog 2.png" , "Dog 1.png");
obstacle1 = loadImage("ball.png")
obstacle2= loadImage("bone.png")

}

function setup() {
createCanvas(windowWidth-200,windowHeight-200)

scene = createSprite(width/2,height/2)
scene.addImage(sceneImg)
scene.scale = 1.3
scene.velocityX=-5

bella = createSprite(width/11,height-80,20,20)
bella.addAnimation("running" , bellaRun)
bella.scale = 1.2

obstaclesGroup=new Group()

score=0

}

function draw() {

    score = score+5



    if (scene.x < 350){
        scene.x = 1200;
      }
    

  spawnObstacles()

drawSprites();

text("Score: "+ score, width/11,height/14);
  



}

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(width,height-100,10,40);
    obstacle.velocityX = -6;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
      
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.2;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }
