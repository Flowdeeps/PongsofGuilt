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
    yPos      : 10,
    xPos      : 390,
    speed     : 4,
    size      : 20,
    vState     : 'down',
    hState     : 'left'
  };

  // canvas elements
  var ballDraw = function(x, y, w){
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.arc(x, y, w/2, 0, 2 * Math.PI, false);
    ctx.fill();
  };

  // behaviours
  var ballBehaviour = function(){
    var vState           = ballVars.vState;
    var hState           = ballVars.hState;
    // vertical logic
    if (ballVars.yPos > (canvas.height - 10)) {
      ballVars.vState    = 'down';
    }
    if ((ballVars.yPos === 10) || (ballVars.yPos < 10)) {
      ballVars.vState    = 'up';
    }
    if (vState === 'up') {
      ballVars.yPos     = ballVars.yPos + (1 * ballVars.speed);
    } else {
      ballVars.yPos     = ballVars.yPos - (1 * ballVars.speed);
    }
    // horizontal logic
    if (ballVars.xPos > (canvas.width - 10)) {
      ballVars.hState    = 'left';
    }
    if ((ballVars.xPos === 10) || (ballVars.xPos < 10)) {
      ballVars.hState    = 'right';
    }
    if (hState === 'right') {
      ballVars.xPos     = ballVars.xPos + (1 * ballVars.speed);
    } else {
      ballVars.xPos     = ballVars.xPos - (1 * ballVars.speed);
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