var fixedrect, movingrect;
var o1, o2;

function setup() {
 createCanvas(1200,800);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(400,600,50,50);
  movingrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect.debug = true;
  o1 = createSprite(600,200,20,60);
  o1.shapeColor = "blue";
  o2 = createSprite(700,200,20,60);
  o2.shapeColor = "blue";
}

function draw() {
  background(0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
    if(isTouching(movingrect, o2))
    {
     movingrect.shapeColor = "red";
     o2.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "green";
    o2.shapeColor = "blue";
  }
  drawSprites();
  
}

