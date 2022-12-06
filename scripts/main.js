// Initialisation
function init() {
  deviceSize()
  ballArray = [];
  slidersInit();
  particlesInit();
}

// Animation loop
function update() {
  window.requestAnimationFrame(update);
  
  c.fillStyle = COLOUR_BG;
  c.fillRect(0, 0, canvas.width, canvas.height);
 
  for (let i = 0; i < total; i++) {
    ballArray[i].update();
  }
}

init();
update();
