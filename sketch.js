var score = 0;

function preload(){
  drex_img = loadAnimation("p1.png","p2.png")
  drex_left = loadAnimation("p3.png","p4.png")

  m_right = loadAnimation("M1.png","m2.png")
  m_left = loadAnimation("m3.png","m4.png") 

  m5_img = loadImage("m5.png")
  m6_img = loadImage("m6.png")

  coin_img = loadImage("coin.png")

  diamond_img = loadImage("diamond.png")

}

function setup() {
  createCanvas(1300,600);
  f1=createSprite(600, 170, 1200, 10);
  f2=createSprite(700, 370, 1200, 10);
  f3=createSprite(650, 580, 1300, 10);

  entrance = createSprite(10, 120, 20, 100);

  exit = createSprite(1240,530,20,100);

  diamond = createSprite(1270,550,20,20);
  diamond.addImage(diamond_img);
  diamond.scale = 0.3;

   
  drex = createSprite(40,120,20,20);
  drex.addAnimation("right",drex_img)
  drex.addAnimation("left",drex_left)

 monster1 = createSprite(100,130,20,20);
 monster1.addAnimation("right",m_right)
 monster1.addAnimation("left",m_left)
 monster1.scale = 0.7;
 monster1.velocityX = 4;
 edges = createEdgeSprites();

monster2 = createSprite(700,330,20,20);
monster2.addImage(m5_img);
monster2.scale = 0.7;
monster2.velocityX = 4;

monster3 = createSprite(700,540,20,20);
monster3.addImage(m6_img);
monster3.scale = 0.7;
monster3.velocityX = -4;

coinGroup1 = new Group();
coinGroup2 = new Group();
coinGroup3 = new Group();


}


function draw() {
  background(204,255,255);  
  text("COINS : "+score,1200,50)

  if (keyWentDown(RIGHT_ARROW)){
    drex.changeAnimation("right",drex_img)
    drex.velocityX = 5;
  }
  if (keyWentUp(RIGHT_ARROW)){
    drex.velocityX = 0;
  }
  if (keyWentDown(LEFT_ARROW)){
    drex.changeAnimation("left",drex_left)
    drex.velocityX = -5;
  }
  if (keyWentUp(LEFT_ARROW)){
    drex.velocityX = 0;
  }
  if (keyDown(UP_ARROW)){
    drex.velocityY = -5;
  }

  drex.velocityY = drex.velocityY+0.5;

  for(var i = 200 ; i <1000 ; i = i+80){
    coin = createSprite(i,140,20,20)
    coin.addImage(coin_img)
    coin.scale = 0.3;
  }
  for(var i = 200 ; i <1000 ; i = i+70){
    coin1= createSprite(i,340,20,20)
    coin1.addImage(coin_img)
    coin1.scale = 0.3;

  }
  for(var i = 200 ; i <1000 ; i = i+70){
    coin2 = createSprite(i,550,20,20)
    coin2.addImage(coin_img)
    coin2.scale = 0.3;

  }
 coinGroup1.add(coin);
 coinGroup2.add(coin1);
 coinGroup3.add(coin2);

 if(drex.isTouching(coinGroup1)){
   coinGroup1.visible=false
 }

  drex.collide(f1);
  drex.collide(f2);
  drex.collide(f3);
 
  drex.bounceOff(edges);
  monster1.bounceOff(edges);
  monster2.bounceOff(edges);
  monster3.bounceOff(edges);
  drawSprites();
}