const sliders = 
`<div id="sliders">
  <h1><a href="https://www.github.com/edibotopic/stokes-law">Stoke's Law</a></h1>
<div class="items">
    <div class="item">
  <p>Particle Diameter</p>
  <input id="slide-diam" type="range" min="1" max="30" value="15" step="1">
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
  <input id="slide-visc" type="range" min="1" max="60" value="30" step="1">
 </div> 

<hr>

    <div class="item">
<button id="restart">Restart</button>
 </div> 

 </div> 
</div>`

panel.innerHTML = sliders;
