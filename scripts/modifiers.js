// Update particle properties with slider values
modifiers = () => {
    ballArray.forEach(ball => {
    let newRadius = document.getElementById("slide-radius").value;
    let newRhoP = document.getElementById("slide-rhoP").value;
    let newRhoS = document.getElementById("slide-rhoS").value;
    let newGforce = document.getElementById("slide-Gforce").value;
    let newVisc = document.getElementById("slide-visc").value;
    
    ball.r = Math.abs(ball.r - newRadius); //Note: hack!!!
    
    rhoP = newRhoP;
    rhoS = newRhoS;
    mu = newVisc;
    
    ball.dy = ((((ball.r * 2) ** 2) * (rhoP - rhoS) * (g * newGforce)) / (emp * mu));
    
  }
  )
  
}
