// Canvas
const canvas = document.createElement("canvas");
canvas.id = "canvas";
const body = document.getElementById("body");
body.appendChild(canvas);
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

// Listeners
document.getElementById("restart").addEventListener("click", () => {
  init();
})