const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg, bgIMG, bgIMG2, diverAnimation, sharkImg, titleIMG, bg;
var diver1, beginningGreeting, sparklesGIF, treasure1;
var gameState = 0;
var wall1, wall2, wall3;


function preload() {
  bgIMG2 = loadImage("images/riverIMG.png");
  bgIMG = loadImage("images/RiverBGImg.jpg");
  bgImg = loadImage("images/riverBgImgFinal.png");
  sharkImg = loadImage("images/sharkImg.png");
  titleImg = loadImage("images/titleIMG.png");
  sparklesGIF = createImg("images/infinitesparkles.gif");
  sparklesGIF2 = createImg("images/infinitesparkles.gif");
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

 diver1 = new Diver(150, 200, 250, 150);

 beginningGreeting = new Instructions();

 treasure1 = new Treasure(6010,335,3,5);

 wall1 = new Wall(640, 285, 10, 100);
 wall2 = new Wall(1195, 125, 200, 10);
 wall3 = new Wall(1290, 93, 10, 74);

}


function draw() {
  if (gameState===1) {
    background("white");
    bg = image(bgIMG2, -325, -1, 7000, 400);  

    wall1.display();
    wall2.display();
    wall3.display();
    treasure1.display();

  } else if (gameState===0){
    background("lightblue");
  } else {
    background("lightgrey");
  }

  if (gameState===0) {
    image(titleImg, 50, 13, 700, 100);
    sparklesGIF.position(425,255);
    sparklesGIF.size(40,40);
    sparklesGIF2.position(485,230);
    sparklesGIF2.size(40,40);
  } else {
    sparklesGIF.size(0,0);
    sparklesGIF2.size(0,0);
  }

  if (keyDown("RIGHT") || keyDown("d")) {
    camera.position.x = camera.position.x+10;
  }
  if (keyDown("LEFT") || keyDown("a")) {
    camera.position.x = camera.position.x-10;
  }

  beginningGreeting.display();
  diver1.display();

  detectCollision1(diver1,wall1);

  // var distance = dist(diver1.body.position.x, diver1.body.position.y, wall1.body.position.x, wall1.body.position.y);
  // console.log(distance);
  // console.log(diver1.body.position.x);

  drawSprites();
}

function detectCollision1(bodyA, bodyB) {
	var xdistance=bodyA.body.position.x-bodyB.body.position.x;
  var ydistance=bodyA.body.position.y-bodyB.body.position.y;
	if (xdistance <= 150 && xdistance>=-145 && ydistance <= 100 && ydistance>=-100) {
		console.log("collided");
	}
}
