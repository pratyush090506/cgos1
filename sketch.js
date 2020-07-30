var car,wall,barrier;
var speed,weight;
function setup() {

  createCanvas(1600,400);

  car = createSprite(100, 50, 20, 20);
  car.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
  wall = createSprite(1200,55,10,60);
  wall.shapeColor="gray";
  barrier = createSprite(800,100,1600,16);
  barrier.shapeColor="white";
 

  car = createSprite(50, 150, 20, 20);
  car.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
  wall = createSprite(1200,155,10,60);
  wall.shapeColor="gray";
  barrier = createSprite(800,200,1600,16);
  barrier.shapeColor="white";
  

  car = createSprite(50, 250, 20, 20);
  car.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
  wall = createSprite(1200,255,10,60);
  wall.shapeColor="gray";
  barrier = createSprite(800,300,1600,16);
  barrier.shapeColor="white";


  car = createSprite(50, 350, 20, 20);
  car.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
  wall = createSprite(1200,355,10,60);
  wall.shapeColor="gray";
 
  

}

function draw() {
  background(0,0,0);  

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
      car.x=1190;
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
      car.x=1190;
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
      car.x=1190;
    }
  }



  drawSprites();
}