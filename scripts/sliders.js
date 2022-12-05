// Create panel of sliders and buttons
const sliders =
  `<div id="sliders">
  <div class="items">
    <div class="item">
    <p>Particle Diameter</p>
    <input title="Adjust diameter" id="slide-radius" type="range" min="1" max="40" value="1" step="1">
  </div> 

  <div class="item">
    <p>Particle Density</p>
    <input title="Adjust particle density" id="slide-rhoP" type="range" min="0.5" max="1.8" value="1.05" step="0.05" class="slider" id="myRange">
  </div> 

  <div class="item">
    <p>Solvent Density</p>
    <input title="Adjust solvent density" id="slide-rhoS" type="range" min="0.5" max="1.8" value="1.00" step="0.05">
  </div> 

  <div class="item">
    <p>Centrifugal Force</p>
    <input title="Apply centrifugal force" id="slide-Gforce" type="range" min="1" max="50" value="1.00" step="1.00" class="slider">
  </div>

  <div class="item">
    <p>Solvent Viscosity</p>
    <input title="Adjust solvent viscosity" id="slide-visc" type="range" min="1" max="100" value="50" step="1">
  </div> 

<hr>

  <div class="item">
    <button title="Restart" id="restart"><i class="fa fa-repeat" aria-hidden="true"></i></button>
    <button title="About" id="about")><i class="fa fa-question" aria-hidden="true"></i></button>
    <button title="Source" id="source" onclick=window.open("https://github.com/edibotopic/stokes-law")><i class="fa fa-code" aria-hidden="true"></i></button>
  </div> 

 </div> 
</div>`

panel.innerHTML = sliders;

// Ensure default values for sliders (NOTE: arbitrary values set for "user feel")
const slidersInit = () => {
  document.getElementById("slide-radius").value = 15;
  document.getElementById("slide-rhoP").value = 1.05;
  document.getElementById("slide-rhoS").value = 1.00;
  document.getElementById("slide-Gforce").value = 1.00;
  document.getElementById("slide-visc").value = 10;
}

// Set initial properties of random particles for device of size n 
const particlesInit = () => {
  for (let i = 0; i < n; i++) {
    let r = randomNoFromRange(0.15, 1.0);
    const padding = r*document.getElementById("slide-radius").value;
    let x = randomNoFromRange(padding, canvas.width - (padding));
    let y = randomNoFromRange(padding, canvas.height - (padding));
    let dx = randomNoFromRange(-2, 2) / 30; //particles drift slightly on x-axis (NOTE: could be improved with random walk)
    let dy = ((((r * 2) ** 2) * (rhoP - rhoS) * g) / (emp * mu)); //velocity along vertical axis determined by Stoke's Law
    let color = randomColor(colors); //colours of balls vary slightly to give illusion of depth

    ballArray.push(new Ball(x, y, dx, dy, r, color));
  }
}

