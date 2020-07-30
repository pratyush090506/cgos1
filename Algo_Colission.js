var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);

  fixedrect = createSprite(400, 200, 30, 60);
  fixedrect.shapeColor = "green";
  fixedrect.debug=true;
  movingrect = createSprite(200,100,60,30);
  movingrect.shapeColor = "green";
  movingrect.debug=true;
}

function draw() {

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2
    && fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2
    )
  {
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
    
  }
  else{
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }

  background(0,0,0);  
  drawSprites();
}