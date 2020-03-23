const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stick1,stick2,stick3,stick4,stick5,stick6,stick7;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  stick1 = new Stick(400, 390, 50, 200);
  stick2 = new Stick(425, 390, 50, 100);
  stick3 = new Stick(375, 390, 50, 100);
  stick4 = new Stick(450, 390, 50, 250);
  stick5 = new Stick(350, 390, 50, 250);
  stick6 = new Stick(460, 390, 25, 300);
  stick7 = new Stick(325, 390, 25, 300);
  ground = new Ground(600,395,1200,20);
}

function draw() {
  background(0,255,255); 
  Engine.update(engine);
  stick1.display(); 
  stick2.display(); 
  stick3.display(); 
  stick4.display(); 
  stick5.display(); 
  stick6.display(); 
  stick7.display(); 
  ground.display();
  drawSprites();
}