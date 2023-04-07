// A modal window for explaining the application

const linkEsc = `&lt;iframe
src=&quot;https://
edibotopic.github.io/
stokes-law/&quot; 
width=&quot;600&quot; height=&quot;800&quot; 
title=&quot;Stoke's Law Simulation&quot;&gt;
&lt;/iframe&gt;`

const linkClean = `<iframe
src="https://edibotopic.github.io/stokes-law/" 
width="600" height="800" 
title="Stoke's Law Simulation">
</iframe>`

const aboutContent =
    `
<div class="modal-content">
<span class="close">&times;</span>
<p>A <strong>dispersion</strong> has particles of <strong>diameter</strong> <i>D</i> suspended in a solvent with <strong>viscosity</strong> <i>&#956;</i>.</p>
<p>Separation is driven by a difference between <strong>particle density</strong> (<i>&#961;<sub>p</sub></i>) and <strong>solvent density</strong> (<i>&#961;<sub>s</sub></i>).</p>
<p>The separation <strong>velocity</strong> <i>v</i> can be defined using Stoke's Law (<i>hover</i> or <i>touch</i> to reveal):</p>
<div class="deblur" width="100%">
<img style="margin-left:auto; margin-right:auto;display:block" src="img/equation_light.png">
</div>
<p>To <strong>embed this interactive simulation</strong> copy/paste the code below into a HTML file (website) or HTML editor (LMS):</p>
<div id="codebg">
<button title="Copy" id="copy"><i class="fa fa-copy" aria-hidden="true"></i></button>
<pre>
<code id="linkFrame">
${linkEsc}
</code>
</pre>
</div>
<small><strong>Note:</strong> <i>particles not to scale</i></small>
</div>
`

const modal = document.getElementById("modal");

modal.innerHTML = aboutContent;

const btn = document.getElementById("about");
const cpy = document.getElementById("copy");
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

cpy.onclick = () => {
  let linkText = linkClean;
    navigator.clipboard.writeText(linkText);
    let cpyBtn = document.getElementById("copy");
    
    cpyBtn.setAttribute("title", "link copied")

    setTimeout(() => {
        cpyBtn.setAttribute("title", "copy");
    }, 6000)
}
