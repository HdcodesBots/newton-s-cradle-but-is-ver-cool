const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var breeze;
var r = 5
var b = 255
var y2 = "white"
var a = 7



let x = 200;
let y = 200;
let extraCanvas;

function setup() {
  createCanvas(1920, 1080);
  extraCanvas = createGraphics(1920, 1080);
  extraCanvas.clear();
  background("lightblack");

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  roof = new Roof(425, 300, 250, 20);
  bobObject1 = new Bob(340, 470, 20)
  bobObject2 = new Bob(380, 470, 20)
  bobObject3 = new Bob(420, 470, 20)
  bobObject4 = new Bob(460, 470, 20)
  bobObject5 = new Bob(500, 470, 20);
  rope1 = new Rope(bobObject1.body, roof.body, -40 * 2, 0);
  rope2 = new Rope(bobObject2.body, roof.body, -20 * 2, 0);
  rope3 = new Rope(bobObject3.body, roof.body, -0 * 2, 0);
  rope4 = new Rope(bobObject4.body, roof.body, 20 * 2, 0);
  rope5 = new Rope(bobObject5.body, roof.body, 40 * 2, 0);
  Engine.run(engine);
}

function draw() {
  r = random(235)
  b = random(0)
  y2 = random(255, 255, 255)

  // No trails!
  background(r, y2, b, a);
  //x += random(-5, 5);
  // y += random(-5, 5);

  // trails
  lol();
  // rectMode(CENTER);
  //rect(x, y, 20, 20);

  rectMo = (CENTER);

  fill(128, 128, 128)
  roof.display()
  strokeWeight(3);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  fill("lightgray");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  //background

  //elipse
  noStroke()
  fill(r, 0, 200)
  ellipse(mouseX, mouseY, 24, 24)

  if (keyCode === UP_ARROW) {


    textSize(50)

    text("interacting...", 800, 400);
  } else {
    textSize(30)
    fill("Black")
    text("note:there are two outcomes in this 1st : directly press up arrow 2nd: click and press the up arrow", 100, 100);
    text("Move your cursor for surprise",500, 130);
    textSize(50)
    textSize(50)
    fill("white")
    text("up arrow to interact", 800, 400);

  }
}


function lol() {

  if (mouseIsPressed) {
    extraCanvas.fill("black");
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 1920000, 100000);
  }
  image(extraCanvas, 0, 0);

  fill(255, 0, 0);
  stroke(255);
}




function drawLine(constraint) {
  bobBodyPosition = constraint.bodyA.position;
  roofBodyPosition = constraint.bodyB.position;
  roofBodyOffset = constraint.pointB;
  roofBodyX = roofBodyPositiion.x + roofBodyOffset.x;
  roofBodyY = roofBodyPosition.y + roofBodyOffset.y;
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {
      x: -60,
      y: -45
    });
    //textSize(50)
    //fill("Black")
    //text("Click to see other outcome",600,100);


  }
}