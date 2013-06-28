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

  var ball = function(x, y, w){
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.arc(x, y, w/2, 0, 2 * Math.PI, false);
    ctx.fill();
  };

  var fps = 60;
  var speed = 10;
  var yPos = 10;
  var xPos = 1;
  var ballUp = true;
  function animate() {
    setTimeout(function() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Drawing code goes here
      if (yPos > (canvas.height - 10)) {
        ballUp = false;
      }
      if ((yPos === 10) || (yPos < 10)) {
        ballUp = true;
      }
      if (ballUp === true) {
        yPos = yPos + 1;
      } else {
        yPos = yPos - 1;
      }
      ball(390, yPos, 20);
      console.log(yPos);
    }, 1000 / fps);
  }

  // objects


};