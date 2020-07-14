const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  base = new Ground(500,350,300,20);

  //layer 1

  block1 = new Block(375,325,50,50);
  block2 = new Block(425,325,50,50);
  block3 = new Block(475,325,50,50);
  block4 = new Block(525,325,50,50);
  block5 = new Block(575,325,50,50);
  block6 = new Block(625,325,50,50);
}

function draw() {
  Engine.update(engine);

  background(,0,0);  

  base.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
}