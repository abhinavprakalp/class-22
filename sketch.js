const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;

var ae,aw,arectangle,aground

function setup() {
  createCanvas(800,400);
  
  ae=engine.create();
  aw=ae.world;

  var rop={
    restitution:1
  }
  arectangle=bodies.circle(400,200,12,rop);
  world.add(aw,arectangle);

  var gops ={
    isStatic:true
  }

  aground=bodies.rectangle(400,390,800,10,gops);
  world.add(aw,aground);

}

function draw() {
  background(255,255,255);  

  engine.update(ae);
  rectMode(CENTER);
  
  rect(aground.position.x,aground.position.y,800,10);
  ellipseMode(RADIUS);
  ellipse(arectangle.position.x,arectangle.position.y,12,12);
}
