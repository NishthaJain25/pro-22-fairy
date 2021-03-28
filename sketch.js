var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fimg;
var fv;
var fwings;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fimg = loadAnimation("images/fairy.png");
	fv = loadSound("sound/JoyMusic.mp3");
	fwings = loadAnimation("images/fairyImage1.png","images/fairyImage1.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    fv.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(200,450,10,10);
	fairy.addAnimation("ani",fwings);
	fairy.scale = 0.2;


	star = createSprite(520,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y>480 && starBody.position.y>480){
	  Matter.Body.setStatic(starBody,true);
	  fairy.addAnimation("ani",fimg);
	  fairy.x = 590;
	  fairy.y = 520;
	  fv.stop();
  }
  

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown("LEFT")){
		fairy.x = -2;

	}
	if(keyDown("RIGHT")){
		fairy.x = 2;
	}

}
