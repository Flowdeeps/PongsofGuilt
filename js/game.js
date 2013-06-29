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
    ballspeed : 10,
    size      : 20,
    state     : 'down'
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
  var i = ballVars.yPos;
  var ballBehaviour = function(){
    i                   = i + 1;
    var state           = ballVars.state;
    if (ballVars.yPos > (canvas.height - 10)) {
      ballVars.state    = 'down';
    }
    if ((ballVars.yPos === 10) || (ballVars.yPos < 10)) {
      ballVars.state    = 'up';
    }
    if (state === 'up') {
      ballVars.yPos     = ballVars.yPos + 1;
    } else {
      ballVars.yPos     = ballVars.yPos - 1;
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