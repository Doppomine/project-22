const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
  var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
  World.add(world,roof);
 
  
  bob1 = new Bob(400,450,20);
  bob2 = new Bob(420,450,20);
  bob3 = new Bob(440,450,20);
  bob4 = new Bob(380,450,20);
  bob5 = new Bob(360,450,20);

  rope1 = new Rope(roof,bob1.body,0); 
  rope2 = new Rope(roof,bob2.body,40); 
  rope3 = new Rope(roof,bob3.body,80);  
	rope4 = new Rope(roof,bob4.body,-40);
  rope5 = new Rope(roof,bob5.body,-80);  
    Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rect(roof.position.x,roof.position.y,230,20);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob5.body,{x:0,y:0},{x:0.2,y:0})
    }
}