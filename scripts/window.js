// Create a resizable and restartable canvas for the animation
const canvas = document.createElement("canvas");
canvas.id = "canvas";
const body = document.getElementById("body");
body.appendChild(canvas);
const c = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

// Resize
window.addEventListener("resize", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
})

// Listeners
document.getElementById("restart").addEventListener("click", () => {
    reinit();
})
