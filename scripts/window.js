"use strict";
// Create a resizable and restartable canvas for the animation

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
const body = document.getElementById('body');
body.appendChild(canvas);
const c = canvas.getContext('2d');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

// Resize simulation based on window
window.addEventListener('resize', () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
})

// Listen for restart event
document.getElementById('restart').addEventListener('click', () => {
  reinit();
})
