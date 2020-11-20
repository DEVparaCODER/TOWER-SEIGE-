var stand
var ball
var score = 0;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(1000,600);
 
  engine = Engine.create();
    world = engine.world;

    stand = new Ground (500,350,220,20);

   ball=new Ball(300,250);

    slingshot = new SlingShot (ball.body,{x:300 , y:250});
    

    box1 = new Box(500,320,30,40);
    box2 = new Box(530,320,30,40); 
    box3 = new Box(560,320,30,40);
    box4 = new Box(590,320,30,40);
    box5 = new Box(470,320,30,40);
    box6 = new Box(440,320,30,40);
    box7 = new Box(410,320,30,40);
    
    
    box8 = new Box(440,280,30,40);
    box9 = new Box(470,280,30,40);
    box10 = new Box(500,280,30,40);
    box11 = new Box(530,280,30,40);
    box12 = new Box(560,280,30,40);


    box13 = new Box(470,240,30,40);
    box14 = new Box(500,240,30,40);
    box15 = new Box(530,240,30,40);


    box16 = new Box(500,200,30,40);
    
}

function draw() {
  background(255,255,255);  

  text("SCORE:"+score,750,40);

  Engine.update(engine);

  stand.display();
  
  fill("lightBlue")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();



  fill("pink")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("green")
  box13.display();
  box14.display();
  box15.display();

  fill("black")
  box16.display();

  ball.display();


  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
 

  slingshot.display();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
 
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(ball.body);
  }
}


