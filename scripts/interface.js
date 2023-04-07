// Create panel of sliders and buttons
const minRad = 1;
const maxD = 20;
const valRad = DEFAULT_RADIUS;
const stepRad = 1;

const minRhoP = 500;
const maxRhoP = 1500;
const valRhoP = DEFAULT_RHO_P;
const stepRhoP = 50;

const minRhoS = 500;
const maxRhoS = 1500;
const valRhoS = DEFAULT_RHO_S;
const stepRhoS = 50;

const minG = 1;
const maxG = 40;
const valG = DEFAULT_GFORCE;
const stepG = 1;

const minMu = 1;
const maxMu = 100;
const valMu = DEFAULT_VISCOSITY;
const stepMu = 1;

const sliders =
    `<div id="sliders">
      <div class="items">
        <div class="item">
        <p class="headers" slider title="units: mm">Particle Radius</p>
        <input title="Adjust particle radius" id="slide-radius" type="range" min=${minRad} max=${maxD} value=${valRad} step=${stepRad} oninput="this.nextElementSibling.value = this.value">
        <output id="sliderData1">${valRad}</output>
     </div> 

      <div class="item">
        <p class="headers" title="units: kg/m&#x00B3">Particle Density</p>
        <input title="Adjust particle density" id="slide-rhoP" type="range" min=${minRhoP} max=${maxRhoP} value=${valRhoP} step=${stepRhoP} class="slider" oninput="this.nextElementSibling.value = this.value">
        <output id="sliderData2">${valRhoP}</output>
      </div> 

      <div class="item">
        <p class="headers" title="units: kg/m&#x00B3">Solvent Density</p>
        <input title="Adjust solvent density" id="slide-rhoS" type="range" min=${minRhoS} max=${maxRhoS} value=${valRhoS} step=${stepRhoS} oninput="this.nextElementSibling.value = this.value">
        <output id="sliderData3">${valRhoS}</output>
      </div> 

      <div class="item">
        <p class="headers" title="units: none">Centrifugal Force</p>
        <input title="Apply centrifugal force" id="slide-Gforce" type="range" min=${minG} max=${maxG} value=${valG} step=${stepG} class="slider" oninput="this.nextElementSibling.value = this.value">
        <output id="sliderData4">${valG}</output>
      </div>

      <div class="item">
        <p class="headers" title="units: Pa.s">Solvent Viscosity</p>
        <input title="Adjust solvent viscosity" id="slide-visc" type="range" min=${minMu} max=${maxMu} value=${valMu} step=${stepMu} oninput="this.nextElementSibling.value = this.value">
        <output id="sliderData5">${valMu}</output>
      </div> 

    <br>

      <div class="item">
        <button title="Reload particles" id="restart"><i class="fa fa-repeat" aria-hidden="true"></i></button>
        <button title="Show data" id="graph"><i class="fa fa-line-chart" aria-hidden="true"></i></button>
        <button title="About the simulation" id="about")><i class="fa fa-question" aria-hidden="true"></i></button>
        <button title="Source code" id="source" onclick=window.open("https://github.com/edibotopic/stokes-law")><i class="fa fa-book" aria-hidden="true"></i></button>
      </div> 

 </div> 
</div>`

panel.innerHTML = sliders;

// Ensure default values for sliders (NOTE: arbitrary values set for "user feel")
const slidersInit = () => {
    document.getElementById("slide-radius").value = DEFAULT_RADIUS;
    document.getElementById("slide-rhoP").value = DEFAULT_RHO_P;
    document.getElementById("slide-rhoS").value = DEFAULT_RHO_S;
    document.getElementById("slide-Gforce").value = DEFAULT_GFORCE;
    document.getElementById("slide-visc").value = DEFAULT_VISCOSITY;
}

// Set initial properties of random particles with total number determined by device
const particlesInit = () => {
    for (let i = 0; i < total; i++) {
        let r = randomNoFromRangeG(0.0, 1.0); //generate normal distribution of random values
        const padding = r * document.getElementById("slide-radius").value;
        let x = randomNoFromRange(padding, canvas.width - (padding));
        let y = randomNoFromRange(padding, canvas.height - (padding));
        let dx = randomNoFromRange(-1, 1) / 90; //particles drift slightly on x-axis
        let dy = ((((r * 2) ** 2) * (rhoP - rhoS) * g) / (emp * mu)); //velocity along vertical axis determined by Stoke's Law
        let color = randomColor(COLOURS_PARTS); //colours of balls vary slightly to give illusion of depth

        ballArray.push(new Ball(x, y, dx, dy, r, color));
    }
}
