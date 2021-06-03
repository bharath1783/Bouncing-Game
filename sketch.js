const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1,rubber2,rubber3,rubber4,rubber5;
var iron1,iron2,iron3;
var stone1,stone2,stone3,stone4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
   rubber1 = new Rubber(500,450,2);
   rubber2 = new Rubber(520,450,2);
   rubber3 = new Rubber(540,450,2);
   rubber4 = new Rubber(560,450,2);
   rubber5 = new Rubber(560,450,2);
   iron1 = new Iron(200,300,20);
   iron2 = new Iron(270,350,20);
   iron3 = new Iron(400,350,20);
    stone1 = new Stone(800,350,20);
    stone2 = new Stone(900,350,20);
    stone3 = new Stone(900,350,20);
    stone4 = new Stone(1000,350,20);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   rubber1.display();
   rubber2.display();
   rubber3.display();
   rubber4.display();
   rubber5.display();
   iron1.display();
   iron2.display();
   iron3.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
   ellipse(0,0,2,2);
 
}