const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero;
var backgroundImage;
var fly;
var box1;

function preload() {
//preload the images here
  backgroundImage = loadImage("images/GamingBackground.png")
}

function setup() {
  var canvas = createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0,600,1000,20);
  hero = new Hero(110,100,20,20);

  fly = new Fly(hero.body,{x:200,y:50})

  box1 = new Box(360,200,60,60);
  box2 = new Box(360,200,60,60);
  box3 = new Box(360,200,60,60);
  box4 = new Box(360,200,60,60);
  box5 = new Box(360,200,60,60);

  Engine.run(engine);
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

 ground.display();
 hero.display();
 fly.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();


}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY })
}