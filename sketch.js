
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paperball,dustbinobj,ground1;
var world;


function setup() {
	createCanvas(1600, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paperball=new paper(200,450,40);
ground1=new ground(width/2,670,width,20);
log1=new dustbin(1200,680,200,20);
log2=new dustbin(1090,590,20,200);
log3=new dustbin(1310,590,20,200)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
 log1.display();
 log2.display();
 log3.display();
 paperball.display();
 ground1.display();
 // drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
	}
}

