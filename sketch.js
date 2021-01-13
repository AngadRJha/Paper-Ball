
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var circle
var wall
function preload()
{
	dustbinImage =  loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(900, 700);
	engine = Engine.create();
	world = engine.world;
	wall =  new Walls(420,545,10,120)
	wall1 =  new Walls(527,545,10,120)
	wall2 =  new Walls(465,592,120,10)
	ground =  new Ground(400,650,800,100)
	paper = new Paper(83,540)
	dustbin =  createSprite(470,530,20,20)
	dustbin.addImage(dustbinImage)
	dustbin.scale=0.5
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  text("x: "+mouseX+"y: "+mouseY,mouseX,mouseY)
  paper.display()
  ground.display()
  wall.display()
  wall1.display()
  wall2.display()
  drawSprites();

 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y:0.1})
	}
}



