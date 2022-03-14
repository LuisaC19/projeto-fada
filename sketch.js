var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, imgFada, vozFada;
var imgFundo;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    imgFada = loadImage("images/fairyImage2.png");
    vozFada = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    vozFada.play();

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(100,550, 20,20);
    fada.addImage(imgFada);
    fada.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {

    background(bgImg);

    if (star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody, false);
        vozFada.play();
    }

    if (keyDown(RIGHT_ARROW)) {
        fada.velocityX = 4;
      }
      
      if (keyDown(LEFT_ARROW)) {
        fada.velocityX = -4; 
      }

    drawSprites();
}