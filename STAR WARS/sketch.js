var galaxy,galaxyImg
var spaceShip,spaceShipImg
var edges;
var monster,monsterGrp,monster1,monster2,monster3,monster4
var meteor








function preload(){
galaxyImg=loadImage("Images/space.jpg")
spaceShipImg=loadImage("Images/ship.png")
monster1 = loadImage("Images/m1.png")
monster2 = loadImage("Images/m2.png")
monster3 = loadImage("Images/m3.png")


  
}

function setup() {



  createCanvas(700,600);
 galaxy=createSprite(350,300)
 galaxy.addImage(galaxyImg)
 galaxy.scale=2
 galaxy.velocityY=2
 
//creating space ship!!
 spaceShip=createSprite(300,400)
 spaceShip.addImage(spaceShipImg)
spaceShip.scale=0.75

meteor=createSprite(300,400,30,30)
meteor.x=spaceShip.x
meteor.y=spaceShip.y
//creating edges
edges=createEdgeSprites();
monsterGrp = new Group();

}





function draw() {
  background(0);  
  if (galaxy.y > 600){
    galaxy.y = 350;
}
 if(keyDown("RIGHT")){
  spaceShip.x=spaceShip.x+2;
 }
 if(keyDown("left")){
   spaceShip.x=spaceShip.x-2;
 }
 if(keyDown("UP")){
  spaceShip.y=spaceShip.y-2;
}

if(keyDown("DOWN")){
  spaceShip.y=spaceShip.y+2;
}

if(spaceShip.isTouching(monsterGrp)){
spaceShip.destroy();
galaxy.destroy();
textSize(30)
fill("Red")
text("THE END",350,300)

}


 spaceShip.bounceOff(edges)
 spawnMonsters();
  drawSprites();
}




function spawnMonsters(){
  if (frameCount % 250 === 0) {
    var monster = createSprite(600,120,40,10);
    monster.x=Math.round(random(100,600))
  
    monster.scale = 0.5;
    monster.velocityY = 3 ;
    var i = Math.round(random(1,4))

    switch(i){
      case 1 : monster.addImage(monster1)
              break;
      
              case 2 : monster.addImage(monster2)
              break;

              case 3 : monster.addImage(monster3)
              break;

          
        default:break
    }
    monsterGrp.add(monster)

  }
}


