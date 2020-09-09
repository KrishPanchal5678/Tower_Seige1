const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;  
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25; 

var ground;

var slingshot;

var pent;

var platform, platform2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
  /*ground = createSprite(400,400,1200,50);
  ground.addImage(platIMG);
  ground.debug = true;
  ground.scale = 1.25;

  platform = createSprite(650,150,250,25);
  platform.addImage(platIMG);
  platform.debug = true;
  platform.scale = 0.25;

  platform2 = createSprite(350,250,250,25);
  platform2.addImage(platIMG);
  platform2.debug = true;
  platform2.scale = 0.25;*/

  ground = new Ground(400,400,1200,50);
  
  block1 = new Box (625, 105, 25, 25);
  block2 = new Box (625, 145, 50, 50);
  block3 = new Box (625, 145, 50, 50);
  block4 = new Box (625, 145, 50, 50);
  block5 = new Box (625, 145, 50, 50);
  block6 = new Box (625, 145, 50, 50);
  block7 = new Box (625, 145, 50, 50);
  block8 = new Box (625, 145, 50, 50);
  block9 = new Box (625, 145, 50, 50);
  block10 = new Box (625, 145, 50, 50);
  block11 = new Box (625, 145, 50, 50);
  block12 = new Box (625, 145, 50, 50);
  block13 = new Box (625, 145, 50, 50);
  block14 = new Box (625, 145, 50, 50);
  block15 = new Box (625, 145, 50, 50);
  block16 = new Box (625, 145, 50, 50);
  block17 = new Box (625, 145, 50, 50);
  block18 = new Box (625, 145, 50, 50);
  block19 = new Box (625, 145, 50, 50);
  block20 = new Box (625, 145, 50, 50);
  block21 = new Box (625, 145, 50, 50);
  block22 = new Box (625, 145, 50, 50);
  block23 = new Box (625, 145, 50, 50);
  block24 = new Box (625, 145, 50, 50);
  block25 = new Box (625, 145, 50, 50);

  platform = new Ground(650, 150, 250, 25);
  platform2 = new Ground(350, 250, 250, 25)
  
  //ground = createSprite(400,400,1200,50);

  ground = createSprite(400,400,1200,50);
  pent = new Block(100, 200);  
  
  slingshot = new SlingShot(pent.body,{x:100, y:200});

}

function draw() {
  background(backgroundImg);
    Engine.update(engine);
 
    ground.display();
    pent.display();
    slingshot.display();
    platform.display();
    platform2.display();
    block1.display();

    drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(pent.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}