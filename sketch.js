const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var pointB ={x:400,y:50};

function setup() {
  createCanvas(800,650);
  engine = Engine.create();
  world = engine.world;


var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball1  = Bodies.circle(220,200,20,ball_options);
World.add(world,ball1);

ball2 = Bodies.circle(420,400,20,ball_options);
World.add(world,ball2);


var options = {
  bodyA : ball1,
  pointB : pointB,
  stiffness: 0.004,
  length : 100
}
this.pointB = pointB;
var string = Constraint.create(options);
World.add(world,string);

var options = {
  bodyA : ball1,
  bodyB : ball2,
  stiffness: 0.004,
  length : 100
}

var string1 = Constraint.create(options);
World.add(world,string1);

fill("WHite");
}


function draw() {
  background(0); 
  Engine.update(engine);

  text("Press Enter to start the oscillation of the pendulum",300,20);
  text("Press space bar to oscillate the pendulum to left and right with mouse",200,50);
  

  var pointB = this.pointB;

  fill(153,50,204);
  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,20);
  
  fill(153,50,204);
  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,20);
  
  strokeWeight(2);
  stroke("white");
  line(ball1.position.x,ball1.position.y,pointB.x,pointB.y);
  
  strokeWeight(2);
  stroke("white");
  line(ball1.position.x,ball1.position.y,ball2.position.x,ball2.position.y);

if(keyCode === ENTER){
fill(153,50,204);
ellipseMode(RADIUS);
ellipse(ball1.position.x,ball1.position.y,20);

fill(153,50,204);
ellipseMode(RADIUS);
ellipse(ball2.position.x,ball2.position.y,20);

strokeWeight(2);
stroke("white");
line(ball1.position.x,ball1.position.y,pointB.x,pointB.y);

strokeWeight(2);
stroke("white");
line(ball1.position.x,ball1.position.y,ball2.position.x,ball2.position.y);

}


else if(keyCode===32){
ball1.position.y = mouseY;
ball1.position.x = mouseX;
}



}

