
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Hammer,Ground,world; 
var rubber1;
var sand1, sand2, sand3, sand4, sand5;
var iron1;
var stone1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Hammer = new hammer (400,500,100,50);
	Ground = new ground (600,height,1200,20);
	rubber1 = new rubber (500,600,70);
	sand1 = new sand (400,600,20);
	sand2 = new sand (400,600,20);
	sand3 = new sand (400,600,20);
	sand4 = new sand (400,600,20);
	sand5 = new sand (400,600,20);
	iron1 = new iron (400,600,90,40);
	stone1 = new stone (500,600,50,90); 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);

  Hammer.display ();
  Ground.display ();
  rubber1.display ();
  sand1.display ();
  sand2.display ();
  sand3.display ();
  sand4.display ();
  sand5.display ();
  iron1.display ();
  stone1.display ();

  
  
 
}



