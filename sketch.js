const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine= Engine.create();
  world= engine.world;
  var option= {isStatic: true}
  ground= Bodies.rectangle(400, 350, 1000, 20, option);
  World.add(world, ground);
  var ballOption= {restitution:1.0}
  ball= Bodies.circle(400, 100, 20, ballOption);
  World.add(world, ball);
}

function draw() {
  background(220); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20)
  ellipse(ball.position.x, ball.position.y, 20, 20)
}
