// Variables for Stoke's Law
let r = document.getElementById("slide-radius").value;
let rhoP = document.getElementById("slide-rhoP").value; // density in kg/m^3
let rhoS = document.getElementById("slide-rhoS").value; // density in kg/m^3
let g = document.getElementById("slide-Gforce").value;; // gravitational acceleration in m/s^2 
let mu = document.getElementById("slide-visc").value;; // viscosity in Pa.s
let emp = 18; // empirical constant
// dy = ((((r * 2) ** 2) * (rhoP - rhoS) * (g)) / (emp * mu));

// Colors BUG => flickering when colors.length>1
const colors = ['rgba(306,333,50,0.7)','rgba(206,233,50,0.8)', 'rgba(196,183,50,0.6)', 'rgba(356,213,50,0.9)'];
