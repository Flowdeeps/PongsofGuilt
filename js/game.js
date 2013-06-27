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

  init();
  animate();

  function init(){
    // get canvas gubbins
    var canvas    = document.createElement('canvas');
    var context   = canvas.getContext('2d');

    // set some stuff
    canvas.width  = 800;
    canvas.height = 600;

    document.body.appendChild(canvas);

  }

  var fps = 60;
  function animate() {
    setTimeout(function() {
      requestAnimationFrame(animate);
      // Drawing code goes here
    }, 1000 / fps);
  }

};