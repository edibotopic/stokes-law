// Variables
let diameter;
let rhoP= 1.05; // density in kg/m^3
let rhoS = 1.0; // density in kg/m^3
let g = 9.8; // gravitational acceleration in m/s^2 
let mu = 30; // viscosity in Pa.s
let emp = 18; // empirical constant

// Colors BUG => flickering when colors.length>1
const colors = ['rgba(306,333,50,0.9)','rgba(306,333,50,0.8)'];

// Canvas
const canvas = document.createElement("canvas");
canvas.id="canvas";
const body = document.getElementById("body");
body.appendChild(canvas);
const c=canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

// Listeners
document.getElementById("restart").addEventListener("click", () => {
   init(); 
})

// Particles
class Ball {
  constructor(x, y, dx, dy, diameter, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.diameter = diameter;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.diameter, 0, Math.PI * 2, false);
    c.closePath();
    c.fillStyle = this.color;
    c.fill();
  }

  update() {
    if (this.x + this.diameter + this.dx > 
            canvas.width || this.x - this.diameter < 0) {
            this.dx = -this.dx
        };
            
    this.y += this.dy;
    this.x += this.dx;
    this.draw();
  }
}

// Initialisation
let ball;
let ballArray;
const n = 200;

function init() {
  ballArray = [];

  for (let i = 0; i < n; i++) {
    let diameter = randomIntFromRange(1,30);
    let x = randomIntFromRange(diameter, canvas.width + diameter);
    let y = randomIntFromRange(5, canvas.height);
    let dx = randomIntFromRange(-1,1)/30;
    let dy=(((diameter**2)*(rhoP-rhoS)*g)/(emp*mu));
    let color = randomColor(colors);
    ballArray.push(new Ball(x,y,dx,dy,diameter,color));
  }

   // Ensure default values for sliders
   document.getElementById("slide-diam").value=15;
   document.getElementById("slide-rhoP").value=1.05;
   document.getElementById("slide-rhoS").value=1.00;
   document.getElementById("slide-Gforce").value=1.00;
   document.getElementById("slide-visc").value=30;

}

// Animation Loop
function animate() {
  window.requestAnimationFrame(animate);

  c.fillStyle = 'rgba(101,104,220)';
  c.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].update();
    }

  ballArray.forEach(ball => {
   let newDiameter = document.getElementById("slide-diam").value;
   let newRhoP = document.getElementById("slide-rhoP").value;
   let newRhoS = document.getElementById("slide-rhoS").value;
   let newGforce = document.getElementById("slide-Gforce").value;
   let newVisc = document.getElementById("slide-visc").value;

   ball.diameter = Math.abs(ball.diameter-newDiameter); //Note: hack!!!

   rhoP = newRhoP;
   rhoS = newRhoS;
   mu = newVisc;

   ball.dy=(((ball.diameter**2)*(rhoP-rhoS)*(g*newGforce))/(emp*mu));
    
   ball.update();
  })
}

init();
animate();
