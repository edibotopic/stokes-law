const sliders =
  `<div id="sliders">
  <h1><a href="https://www.github.com/edibotopic/stokes-law">Stoke's Law</a></h1>
  <div class="items">
    <div class="item">
    <p>Particle Diameter</p>
    <input id="slide-radius" type="range" min="1" max="40" value="1" step="1">
  </div> 

  <div class="item">
    <p>Particle Density</p>
    <input id="slide-rhoP" type="range" min="0.5" max="1.8" value="1.05" step="0.05" class="slider" id="myRange">
  </div> 

  <div class="item">
    <p>Solvent Density</p>
    <input id="slide-rhoS" type="range" min="0.5" max="1.8" value="1.00" step="0.05">
  </div> 

  <div class="item">
    <p>Centrifugal Force</p>
    <input id="slide-Gforce" type="range" min="1" max="50" value="1.00" step="1.00" class="slider">
  </div>

  <div class="item">
    <p>Solvent Viscosity</p>
    <input id="slide-visc" type="range" min="1" max="100" value="50" step="1">
  </div> 

<hr>

  <div class="item">
    <button id="restart">Restart</button>
  </div> 

 </div> 
</div>`

panel.innerHTML = sliders;

// Ensure default values for sliders
const SlidersInit = () => {
  document.getElementById("slide-radius").value = 20;
  document.getElementById("slide-rhoP").value = 1.05;
  document.getElementById("slide-rhoS").value = 1.00;
  document.getElementById("slide-Gforce").value = 1.00;
  document.getElementById("slide-visc").value = 10;
}

// Set initial properties of particles TODO: move somewhere else
const ParticlesInit = () => {
  for (let i = 0; i < n; i++) {
    let r = randomIntFromRange(1, 40);
    let x = randomIntFromRange(r*2, canvas.width - (r*2));
    let y = randomIntFromRange(r*2, canvas.height - (r*2));
    let dx = randomIntFromRange(-2, 2) / 30;
    let dy = ((((r * 2) ** 2) * (rhoP - rhoS) * g) / (emp * mu));
    let color = randomColor(colors);

    ballArray.push(new Ball(x, y, dx, dy, r, color));
  }
}

