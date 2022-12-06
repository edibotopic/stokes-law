// Utility functions
let randomNoFromRange = (min, max) => {
  return Math.random() * (max - min + 1) + min;
}

let randomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)]
}
