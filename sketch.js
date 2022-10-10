const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var solo;
var corda, corda2, corda3;
var fruta;
var frutaimg, backimg, coelhoimg, botaoimg;
var link, link2, link3;
var coelho;
var botao, botao2, botao3;
var coelhopis, coelhocome, coelhotriste;
var balao;
var largura, altura;

let engine;
let world;

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  largura=windowWidth;
  altura=windowHeight;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  solo= new ground(250,690,500,10);
  corda= new rope(8,{x:250,y:100});
  corda2=new rope(6,{x:370,y:80});
  corda3=new rope(4,{x:200,y:200});
  fruta= Bodies.circle(300,300,20);
  Matter.Composite.add(corda.body,fruta);
  link= new links(corda,fruta);
  link2= new links(corda2,fruta);
  link3= new links(corda3,fruta);
  imageMode(CENTER);
  coelho=createSprite(250,620,width/2,height/2);
  coelhopis.frameDelay=20;
  coelhocome.frameDelay=20;
  coelho.addAnimation("coelhopis",coelhopis);
  coelho.addAnimation("coelhocome",coelhocome);
  coelho.addAnimation("coelhotriste",coelhotriste);
  coelho.scale=0.2;
botao=createImg("cut_btn.png");
botao.position(250,80);
botao.size(50,50);
botao.mouseClicked(cortar);
balao=createImg("assets/balloon.png");
balao.position(50,380);
balao.size(150,100);
balao.mouseClicked(sopra);
botao2=createImg("cut_btn.png");
botao2.position(370,60);
botao2.size(50,50);
botao2.mouseClicked(cortar2);
botao3=createImg("cut_btn.png");
botao3.position(200,180);
botao3.size(50,50);
botao3.mouseClicked(cortar3);
}
function preload(){
  frutaimg=loadImage("melon.png");
  backimg=loadImage("background.png");
  coelhoimg=loadImage("Rabbit-01.png");
  botaoimg=loadImage("cut_btn.png");
  coelhopis=loadAnimation("assets/blink_1.png","assets/blink_2.png","assets/blink_3.png");
  coelhocome=loadAnimation("assets/eat_0.png","assets/eat_1.png","assets/eat_2.png","assets/eat_3.png","assets/eat_4.png");
  coelhotriste=loadAnimation("assets/sad_1.png","assets/sad_2.png","assets/sad_3.png");
  coelhopis.playing=true;
  coelhocome.playing=true;
  coelhotriste.playing=true;
  coelhocome.looping=false;
  coelhotriste.looping=false;
}

function draw() 
{
  background("red");
  Engine.update(engine);
image(backimg,width/2,height/2,width,height);
   solo.show();
   corda.show();
   corda2.show();
   corda3.show();
   if(fruta!==null){
    image(frutaimg,fruta.position.x,fruta.position.y,60,60);
   }
   
   if(colisao(coelho,fruta)==true){
    console.log("a");
   coelho.changeAnimation("coelhocome");
   }
   if(colisao(solo.body,fruta)==true){
    console.log("b");
    coelho.changeAnimation("coelhotriste");
   }
   
   
   
   drawSprites();
}
function cortar(){
  corda.break();
  link.cortar();
  link=null;

}
function cortar2(){
  corda2.break();
  link2.cortar();
  link2=null;

}
function cortar3(){
  corda3.break();
  link3.cortar();
  link3=null;

}
function colisao(a,b){
if(b!=null){
var dis=dist(b.position.x,b.position.y,a.position.x,a.position.y);
if(dis<=50){
World.remove(engine.world,fruta);
fruta=null;
return true;
}
else{
  return false;
}

}

}
function sopra(){
Matter.Body.applyForce(fruta,{x:0,y:0},{x:0.012,y:0});
}

