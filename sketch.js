const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var shrimpButton , shrimpButtonImg;
var meatButton , meatButtonImg;
var fishFoodButton , fishFoodButtonImg;
var shark , sharkImg; 
var turtle , turtleImg;

var ocean , oceanImg;
var score = 0

var sharksGroup , turtlesGroup 

var shrimp , meat , fishFood


function preload(){

  oceanImg = loadImage("ocean.jpg");
  shrimpButtonImg = loadImage("shrimp button.png");
  meatButtonImg = loadImage("meat button.png");
  fishFoodButtonImg = loadImage("fish food button.png");
  fishFoodImg = loadImage("fish food.png");
  meatImg = loadImage("meat.png");
shrimpImg = loadImage("shrimp.png");
turtleImg = loadImage("turtle.png");
sharkImg = loadImage("shark.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

shrimpButton = createSprite(100,100)
shrimpButton.addImage("shrimpButton",shrimpButtonImg)
shrimpButton.scale=0.2

meatButton = createSprite(250,100);
meatButton.addImage("meatButton",meatButtonImg);
meatButton.scale = 0.2

fishFoodButton = createSprite(400,100);
fishFoodButton.addImage("fishFoodButton",fishFoodButtonImg);
fishFoodButton.scale = 0.2

sharksGroup = new Group()
turtlesGroup = new Group()
shrimpGroup= new Group()
fishFoodGroup=new Group()
meatGroup= new Group()
 }

function draw() 
{
  background(51);
  image(oceanImg,0,0,width,height);
  Engine.update(engine);

 if(mousePressedOver(shrimpButton)){
  shrimps()
 }

 if(mousePressedOver(meatButton)){
  meats()
 }

 if(mousePressedOver(fishFoodButton)){
  fishFoods()
 }

 if(sharksGroup.isTouching(shrimpGroup)){
  shrimpGroup[0].destroy()
} 
if(sharksGroup.isTouching(meatGroup)){
  meatGroup[0].destroy()
} 
if(sharksGroup.isTouching(fishFoodGroup)){
  fishFoodGroup[0].destroy()
} 


if(turtlesGroup.isTouching(shrimpGroup)){
  shrimpGroup[0].destroy()
} 
 spawnTurtles();
 spawnSharks();


 drawSprites();
 
}

function shrimps(){
  if(frameCount % 10===0){
 shrimp =createSprite(100,100,10,10);
 shrimp.addImage(shrimpImg)
 shrimp.velocityY=5
 shrimp.lifetime=300
 shrimp.scale=0.2
 shrimpGroup.add(shrimp)
  }
  }

  function meats(){
    if(frameCount % 10===0){
     meat = createSprite(250,100,10,10);
     meat.addImage(meatImg)
     meat.velocityY = 5
     meat.lifetime = 300
     meat.scale = 0.2
     meatGroup.add(meat)
    }
  }

  function fishFoods(){
    if(frameCount % 10===0){
      fishFood = createSprite(400,100,10,10);
      fishFood.addImage(fishFoodImg);
      fishFood.velocityY = 5
      fishFood.lifetime = 300
      fishFood.scale = 0.2
      fishFoodGroup.add(fishFood)
    }
  }

  function spawnTurtles(){
    if (frameCount % 250 === 0){
 var turtle = createSprite (width,height-150,10,40);
turtle.velocityX = -3
turtle.y=Math.round(random(300,height-100))
turtle.scale = 0.2;
turtle.lifetime = 500
turtle.addImage(turtleImg)
turtlesGroup.add(turtle)

}
} 

function spawnSharks(){
    if (frameCount % 100 === 0){
 var shark = createSprite (10,height-350,10,40);
shark.velocityX = 3
shark.scale = 0.2;
shark.lifetime = 500
shark.y=Math.round(random(300,height-100))
shark.addImage(sharkImg)
sharksGroup.add(shark)
shark.debug=true
shark.setCollider("rectangle",0,0,200,300)
   

}



}





