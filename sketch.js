var wall,thickness;
var bullet,bulletspeed,bulletweight;

function setup() {
  
  createCanvas(1600,400);

 bullet =  createSprite(50, 200, 70, 10);
 bullet.shapeColor = "white";

 bulletspeed = random(150,270);
 bulletweight = random(30,42);
 thickness = random(70,85);

 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);

 bullet.velocityX = bulletspeed;
}

function draw() {
  
  background(112);

  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;

    var damage = 0.5 * bulletweight * bulletspeed * bulletspeed / wall.width * wall.width * wall.width           


    if(damage < 10){
      wall.shapeColor = "green";
    }

    if(damage > 10){
      wall.shapeColor = "red";
    }
  }
  drawSprites();
}
