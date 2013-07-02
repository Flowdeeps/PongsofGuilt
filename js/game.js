// game logic

window.onload = function(){
  // gameloop

  // requestAnim shim layer by Paul Irish
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(/* function */ callback, /* DOMElement */ element){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  animate();

  // get canvas gubbins
  var canvas    = document.createElement('canvas');
  var ctx       = canvas.getContext('2d');
  // set some stuff
  canvas.width  = 800;
  canvas.height = 600;

  document.body.appendChild(canvas);

  // variables
  var ballVars = {
    yPos      : 0,
    xPos      : 0,
    vVel      : 5,
    hVel      : 5,
    vState    : 'down',
    hState    : 'left',
    size      : 10
  };

  // randomise the start pos
  ballVars.yPos = randomizr(ballVars.size, canvas.height - ballVars.size);
  ballVars.xPos = randomizr(ballVars.size, canvas.width - ballVars.size);
  // randomise Vel
  var randVel = function(){
    // ballVars.vVel = randomizr(1, 10);
    // ballVars.hVel = randomizr(1, 10);
  };

  function randomizr(floor, input){
    var output = Math.floor(Math.random(floor) * input);
    return output;
  }

  // canvas elements
  var ballDraw = function(x, y, w){
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.arc(x, y, w/2, 0, 2 * Math.PI, false);
    ctx.fill();
  };

  // behaviours
  var ballBehaviour = function(){
    var vState           = ballVars.vState;
    var hState           = ballVars.hState;
    // vertical logic
    if (ballVars.yPos > (canvas.height - (ballVars.size / 2))) {
      ballVars.vState    = 'up';
      randVel();
    }
    if ((ballVars.yPos === (ballVars.size / 2)) || (ballVars.yPos < (ballVars.size / 2))) {
      ballVars.vState    = 'down';
      randVel();
    }
    if (vState === 'up') {
      ballVars.yPos     = ballVars.yPos - (1 * ballVars.vVel);
    } else {
      ballVars.yPos     = ballVars.yPos + (1 * ballVars.vVel);
    }
    // horizontal logic
    if (ballVars.xPos > (canvas.width - (ballVars.size / 2))) {
      ballVars.hState    = 'left';
      randVel();
    }
    if ((ballVars.xPos === (ballVars.size / 2)) || (ballVars.xPos < (ballVars.size / 2))) {
      ballVars.hState    = 'right';
      randVel();
    }
    if (hState === 'right') {
      ballVars.xPos     = ballVars.xPos + (1 * ballVars.hVel);
    } else {
      ballVars.xPos     = ballVars.xPos - (1 * ballVars.hVel);
    }
  };

  var fps = 60;
  function animate() {
    setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(animate);
      // Drawing code goes here
      ballDraw(ballVars.xPos, ballVars.yPos, ballVars.size);
      // run behaviours
      ballBehaviour();
    }, 1000 / fps);
  }

  // objects


};