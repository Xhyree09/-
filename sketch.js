var candyImg,lolipopImg,lanternImg;
var forestImg, forest;
var ghost, ghostImg;
var candyImg,lolipopImg,gummiesImg;
var invisibleBlockGroup, invisibleBlock;
var candyGroup,lolipopGroup,lanternGroup;
var gameState = "play"

function preload(){
  forestImg = loadImage("forest.jpg");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  
  forest = createSprite(300,300)
  forest.addImage("forestimg",forestImg)
  forest.velocityY = 4
  
  ghost = createSprite(300,300)
  ghost.addImage("ghostimg",ghostImg)
  ghost.scale = 0.4

  candy1 = loadImage("candy1.png")
  candy2 = loadImage("candy2.png")
  
}

function draw(){
  background(0);
  if(gameState===PLAY){
    background(0);
    
    edges= createEdgeSprites();
    ghost.collide(edges);
    
    if(path.y > height ){
      path.y = height/2;
    }
    
      createCandy();
      createLolipop();
      createGummies();
      createSword();
  
      if (candyGroup.isTouching(ghost)) {
        candyGroup.destroyEach();
        treatCollection=treatCollection+40;
      }
      else if (lolipopGroup.isTouching(ghost)) {
        lolipop.destroyEach();
        treatCollection=treatCollection+80;
        
      }else if(gummiesGroup.isTouching(ghost)) {
        gummies.destroyEach();
        treatCollection= treatCollection + 120;
        
      }else{
        if(lanternGroup.isTouching(ghost)) {
          gameState=END;         
          
          candyGroup.destroyEach();
          lolipopGroup.destroyEach();
          gummiesGroup.destroyEach();
          lanternGroup.destroyEach();
  
        
          candyGroup.setVelocityYEach(0);
          lolipopGroup.setVelocityYEach(0);
          gummiesGroup.setVelocityYEach(0);
          lanternGroup.setVelocityYEach(0);
  }
  drawSprites();
}