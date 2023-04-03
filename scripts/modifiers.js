// Update particle properties with slider values
modifiers = () => {
    ballArray.forEach(ball => {
        let newRadius = document.getElementById("slide-radius").value;
        let newRhoP = document.getElementById("slide-rhoP").value;
        let newRhoS = document.getElementById("slide-rhoS").value;
        let newGforce = document.getElementById("slide-Gforce").value;
        let newVisc = document.getElementById("slide-visc").value;
        let damping = 0.01;

        ball.r = Math.abs(ball.base_r * newRadius);

        rhoP = newRhoP;
        rhoS = newRhoS;
        mu = newVisc;

        //velocity along the vertical (dy) axis for each particle instance is determined by Stoke's law
        ball.dy = ((((ball.r * 2) ** 2) * (rhoP - rhoS) * (g * newGforce)) / (emp * mu)) * damping;

    }
    )
}
