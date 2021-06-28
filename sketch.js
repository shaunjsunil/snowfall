
const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var kid,kidI;
  var ground;
  var right,left;
  var snowman,snowmanI;
  var trajectory=[];
  
  var snow;


  function preload(){
    bg=loadImage("snow1.jpg")
    kidI=loadImage("kid.png")
    snowmanI=loadImage("snowman.png")
    
    }
    

function setup() {
  createCanvas(1400,700);
  engine = Engine.create();
  world = engine.world;

  kid = createSprite(120, 650, 50, 50);
  kid.addImage(kidI)
  kid.scale=(0.1)
  ground = createSprite(700,697,width,4)
  right = createSprite(1400,350,4,height)
  left = createSprite(0,350,4,height)
  snowman = createSprite(850,550,40,40)
  snowman.addImage(snowmanI)
  snowman.scale=(0.4)
  





  


}
 


function draw() {
  background(bg);
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  

  if(keyDown("space") && kid.y>471){
    kid.velocityY=-25

  }
 
  kid.setCollider("rectangle", 0, 0, 2000, 3900, 0)
  kid.velocityY=kid.velocityY+0.9
  if(keyDown("right")){
    kid.x=kid.x+20

  }
  if(keyDown("left")){
    kid.x=kid.x-20

  }


 
  kid.collide(ground)
  kid.collide(right)
  kid.collide(left)
  kid.collide(snowman)
  spawnSnow();

  for(i=0;i<trajectory.length;i++){
    trajectory[i].display();

  }
  drawSprites();





}

function spawnSnow(){
if(frameCount%4===0){
trajectory.push(new Snowflakes(random(1,1400),3))

}


}
