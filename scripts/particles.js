// Define particle class that will be used to spawn particle instances

class Ball {
  constructor(x, y, dx, dy, r, colour) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.base_r = r;
    this.colour = colour;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.closePath();
    c.fillStyle = this.colour;
    c.fill();
    c.stroke();
  }

  update() {
    modifiers();

    if (this.x + this.r + this.dx > canvas.width || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    this.y += this.dy;
    this.x += this.dx;

    statsPanel();
    this.draw();
  }
}

let ball;
let ballArray;
