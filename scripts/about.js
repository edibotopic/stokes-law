// A modal window for explaining the application
const aboutContent =
    `
<div class="modal-content">
    <span class="close">&times;</span>
<p>A <strong>dispersion</strong> consists of particles with <strong>diameter</strong> <i>D</i> suspended in a solvent with <strong>viscosity</strong> <i>&#956;</i>.</p>
<p>Separation occurs if there is a difference between <strong>particle density</strong> (<i>&#961;<sub>p</sub></i>) and <strong>solvent density</strong> (<i>&#961;<sub>s</sub></i>).</p>
<p>The separation <strong>velocity</strong> <i>v</i> can be defined using Stoke's Law (<i>hover</i> or <i>long-press</i> to reveal):</p>
<div class="deblur" width="100%">
<img style="margin-left:auto; margin-right:auto;display:block" src="img/equation_light.png">
</div>
<p>By adjusting the <strong>sliders</strong> you can re-discover this equation.</p>
</div>
`

const modal = document.getElementById("modal");

modal.innerHTML = aboutContent;

const btn = document.getElementById("about");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => {
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
