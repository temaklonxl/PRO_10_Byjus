var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criando a raquete e a bola
var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(0, 0, 0, 0);
var ballreset = createSprite(0, 0, 0, 0);

var score=0;
var gameState ="serve";

//primeira fila de caixas
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

//segunda fila de caixas
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";


function draw() {
  background("white");
  
  //exibir pontuação
  textSize(15);
  stroke("red");
  text("Pontuação :"+score,300,20);
  
  if(gameState == "serve")
  {
    
  }
  
  if(gameState == "play")
  {
  //Movendo a raquete com o mouse ao longo do eixo X
  paddle.x=World.mouseX;
  }
  
  if(gameState == "end")
  {
    
  }
  //exibindo texto de boas-vindas
    if (gameState == "serve"){
    textSize();
    text("Bem-vindo! Pressione Enter para iniciar.",30,200);
  
  //Movendo a bola ao pressionar a tecla enter
  if(keyDown("enter")){
    ball = createSprite(150, 250, 20, 20);
    ball.velocityX = 3;
    ball.velocityY = 4;
    gameState = "play";
  }
    }
  
  //Fazendo a bola quicar na raquete e em três lados da tela
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

if (gameState == "play"){
  //Movendo a raquete com o mouse ao longo do eixo x
  paddle.x=World.mouseX;
}

if (ball.isTouching(bottomEdge) || score == 16){
  gameState = "end";
}
  if (gameState == "end"){
  ball.velocityX = 0;
  ball.velocityY = 0;
  
  textSize(30);
  stroke("blue");
  fill("blue");
  text("fim de jogo, clique enter", 51, 200);
  if (keyWentDown("enter")){
    gameState = "serve";
    ball.destroy(ballreset);
 box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
 box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
 box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
 box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
 box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
 box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
 box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
 box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

 box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
 box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
 box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
 box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
 box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
 box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
 box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
 box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
score = 0;
  }
}
  ///Destruir as caixas quando a bola as toca
  if(ball.isTouching(box1))
  {
    score=score+1;
    box1.destroy();
  }
  
  if(ball.isTouching(box2))
  {
    score=score+1;
    box2.destroy();
  }
  
  if(ball.isTouching(box3))
  {
    score=score+1;
    box3.destroy();
  }
  
  if(ball.isTouching(box4))
  {
    score=score+1;
    box4.destroy();
  }
  
  if(ball.isTouching(box5))
  {
    score=score+1;
    box5.destroy();
  }
  
  if(ball.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
  }
  
  if(ball.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
  }
  
  if(ball.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
  }
  
  if(ball.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
  }
  
  if(ball.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
  }
  if(ball.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
  }
  if(ball.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
  }
  if(ball.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
  }
  if(ball.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
  }
  if(ball.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
  }
  if(ball.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
