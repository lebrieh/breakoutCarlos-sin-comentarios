const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var balin;
var player;
var rects= [];
var muros;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  balin= new bola(width/2,300,10);
 player=new square(width/2,360,70,10);
 // cuadros
 for (var i = 0; i <=width; i=i+40) { 
  for (var j = 0; j <=height/4; j=j+15) { 
    rects.push(new cuadros(i,j));
  }
}

 muros = new Walls();
 Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  
 
  if(player.body.position.y-balin.body.position.y<=balin.r+player.h/2
    &&balin.body.position.y-player.body.position.y<=balin.r+player.h/2
    &&balin.body.position.x-player.body.position.x<=balin.r+player.w/2
    &&player.body.position.x-balin.body.position.x<=balin.r+player.w/2){
    console.log("hey");
		Matter.Body.applyForce(balin.body,balin.body.position,{x:random(-3,3),y:-8});
  }

  balin.display();
  player.display(); 
  
  for (var i = 0; i < rects.length; i++) {
    rects[i].display();   
  }


}