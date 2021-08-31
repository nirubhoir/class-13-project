var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
  

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);





}


function draw() {
  background(255);
  
  

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.X=World.mouseX
   


var rand = Math.round(random(1,3))


apple();
leaves();
 

  drawSprites();
}
function apple(){

  if(frameCount%60 === 0){
    
  apple = createSprite(random(50, 350),40,10,10)
  apple.addImage(apple.png)
  apple.scale=0.1
  apple.lifetimeY=150
  apple.velocityY=5
  rand = Math.round(random(1,100))
  }

}
function leaves() {

 if(frameCount%100 === 0){

   leaf = createSprite(random(50, 350),40,10,10)
   leaf.addImage(leaf.png)
   leaf.scale = 0.1
   leaf.lifetime=150
   leaf.velocity=5
   rand = Math.round(random(1,100))
 }
  




}












