"use strict";
// Set variables for Stokes' Law and calculate some statistical information for the particle population

let r = document.getElementById('slide-radius').value; // radius in mm
let rhoP = document.getElementById('slide-rhoP').value; // density in kg/m^3
let rhoS = document.getElementById('slide-rhoS').value; // density in kg/m^3
let g = DEFAULT_GRAVITY; // gravitational acceleration in m/s^2
let mu = document.getElementById('slide-visc').value; // viscosity in Pa.s
let emp = EMPIRICAL_CONSTANT; // empirical constant
let forceG = () => {
  let forceGvalue = document.getElementById('slide-Gforce');
  return forceGvalue.value;
}

let avgDiam = () => {
  let particles = Object.keys(ballArray);
  let getAvg = (key) => ballArray[key]['r'];
  let avgDiam = particles.reduce((a, c) => a + getAvg(c), 0) / particles.length;
  return avgDiam * 2;
}

let avgDelta = () => {
  return rhoP - rhoS;
}

let avgVel = () => {
  let diam = avgDiam().toFixed(2);
  return (
    ((diam / 100) ** 2 * (rhoP - rhoS) * (DEFAULT_GRAVITY * forceG())) /
    (18 * mu)
  );
}
