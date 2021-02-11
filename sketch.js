
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plain = new Plain(400,height,800,20);
    hammer = new Hammer(400,300);
	rubber = new Rubber(650,200,50);
	stone = new Stone(300, 350, 60,70);
	iron = new Iron(600, 400, 90,50);
	sand1 = new Sand(450,650,10);
	sand2 = new Sand(500, 650, 10);
	sand3 = new Sand(350,650,10);
	sand4 = new Sand(475,650,10);
	sand5 = new Sand(375,650,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  plain.display();
  iron.display();
  stone.display();
  hammer.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
}



