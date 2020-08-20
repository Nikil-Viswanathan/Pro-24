var paper;
var ground;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  img = loadImage("dustbingreen.png");
	engine = Engine.create();
	world = engine.world;
	
  dustbin = Bodies.rectangle(670 , 640 , 50 , 50 , {isStatic:true})
 	ground = new Ground (400,690,800,10);

bin1 = new Dustbin(620,645,10,100);
bin2 = new Dustbin(720,645,10,100);
paper = new Paper(75,606,20);
Engine.run(engine);
	

	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("white");
  imageMode(CENTER);
  image(img , dustbin.position.x , dustbin.position.y , 100 , 100);
 ground.display();
paper.display();
 bin1.display();
 bin2.display();
  drawSprites();
  text('x:'+ mouseX + 'y:'+ mouseY , mouseX , mouseY)
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-50});
  }
}