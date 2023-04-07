// Variables for Stoke's Law, where dy = ((((r * 2) ** 2) * (rhoP - rhoS) * (g)) / (emp * mu));

let r = document.getElementById("slide-radius").value; // radius in m
let rhoP = document.getElementById("slide-rhoP").value; // density in kg/m^3
let rhoS = document.getElementById("slide-rhoS").value; // density in kg/m^3
let g = DEFAULT_GRAVITY; // gravitational acceleration in m/s^2 
let mu = document.getElementById("slide-visc").value; // viscosity in Pa.s
let emp = EMPIRICAL_CONSTANT; // empirical constant
let forceGvalue = document.getElementById("slide-Gforce").value;
let forceG = () => {
    let forceGvalue = document.getElementById("slide-Gforce");
    return forceGvalue.value;
}
let gnow = forceG()

let avgDiam = () => {
    let particles = Object.keys(ballArray);
    let getAvg = key => ballArray[key]["r"];
    let avgDiam = particles.reduce((a,c) => a + getAvg(c), 0) / particles.length;
    return(avgDiam*2)
}

let avgDelta = () => {
    return(rhoP-rhoS)
}

let avgVel = () => {
    let diam = avgDiam().toFixed(2);
    return (((((diam)/100) ** 2) * (rhoP - rhoS) * (9.81*1)) / (18 * mu))
}
