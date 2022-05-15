// TODO Draw separated layers to screen
class Sediment {
  constructor(x, y, w, h, sink, color) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.sink = sink
    this.color = color
  }

  draw() {
    c.fillRect(this.x, this.y, this.w, this.h, this.sink, this.color)
    c.fillStyle = this.color
  }

  update() {
    this.h -= this.sink;
    this.draw()
  }
}

class Cream {
  constructor(x, y, w, h, rise, color) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.rise = rise
    this.color = color
  }

  draw() {
    c.fillRect(this.x, this.y, this.w, this.h, this.rise, this.color)
    c.fillStyle = this.color
  }

  update() {
    this.h += this.rise;
    this.draw()
  }
}

// Implementation

let sink; 
let rise; 
let dir;

// Initialise

  sediment = new Sediment(0,canvas.height,canvas.width,0,sink,'red');
  cream = new Cream(0,0,canvas.width,0,rise,'red');

// Update

function updown(){
 if (avg>0.05) {
    dir = 10000
    console.log("Sediment rate: " + sediment.sink)
    && sediment.update()
    } else if (rhoP-rhoS<0) {
    dir = -10000
    console.log("Creaming rate: " + cream.rise)
    && cream.update()
    } else {
    dir = 0
    console.log("Stable System 👍")
    }
    }

   updown()

   sediment.sink = meanVel/1000*avg*dir;
   cream.rise = meanVel/1000*avg*dir;

}
