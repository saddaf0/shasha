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




function preload(){
bellaImg = loadImage("Dog 3.png")
sceneImg = loadImage("scene garden.png")
bellaRun = loadAnimation("Dog 3.png" , "Dog 2.png" , "Dog 1.png");
ball = loadImage("ball.png")
bone = loadImage("bone.png")

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

score=0

}

function draw() {

    score = score+5



    if (scene.x < 350){
        scene.x = 1200;
      }
    

  

drawSprites();

text("Score: "+ score, width/11,height/14);
  

  








}

