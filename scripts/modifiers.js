// Update particle properties with slider values
modifiers = () => {
    ballArray.forEach(ball => {
        let newRadius = document.getElementById("slide-radius").value;
        let newRhoP = document.getElementById("slide-rhoP").value;
        let newRhoS = document.getElementById("slide-rhoS").value;
        let newGforce = document.getElementById("slide-Gforce").value;
        let newVisc = document.getElementById("slide-visc").value;

        ball.r = Math.abs(ball.base_r * newRadius);

        rhoP = newRhoP;
        rhoS = newRhoS;
        mu = newVisc;

        // velocity along the vertical (dy) axis for each particle instance is determined by Stoke's law
        ball.dy = (
            (
            (((ball.r * 2)) // convert radius to diameter
            ** 2) // square the diameter value
            * (rhoP - rhoS) // calculate the density difference
            * (g * newGforce) // determine the gravitational or centrifugal force
            )
            / (emp * mu) // divide by empirical constant times the viscosity
            / (DAMPING) // apply a damping factor for ease-of-visualisation
        )                
    }
    )
}
