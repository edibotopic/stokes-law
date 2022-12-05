// Initialisation
function init() {
  deviceSize()
  ballArray = [];
  slidersInit();
  particlesInit();
}

// Animation
function update() {
  window.requestAnimationFrame(update);
  
  c.fillStyle = 'rgba(101,104,220)';
  c.fillRect(0, 0, canvas.width, canvas.height);

// Size of particle population determined by device size (n)
  for (let i = 0; i < n; i++) {
    ballArray[i].update();
  }
}

init();
update();
