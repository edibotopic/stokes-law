// Variables for Stoke's Law, where dy = ((((r * 2) ** 2) * (rhoP - rhoS) * (g)) / (emp * mu));

let r = document.getElementById("slide-radius").value; // radius in m
let rhoP = document.getElementById("slide-rhoP").value; // density in kg/m^3
let rhoS = document.getElementById("slide-rhoS").value; // density in kg/m^3
let g = document.getElementById("slide-Gforce").value; // gravitational acceleration in m/s^2 
let mu = document.getElementById("slide-visc").value; // viscosity in Pa.s
let emp = EMPIRICAL_CONSTANT; // empirical constant

let avgVel = () => {

    let particles = Object.keys(ballArray);
    let getAvg = key => ballArray[key]["dy"];
    let avg = particles.reduce((a,c) => a + getAvg(c), 0) / particles.length;
    return avg;
}
