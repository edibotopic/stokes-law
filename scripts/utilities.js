// Utility functions for randomisation

// Generate random number within range
let randomNoFromRange = (min, max) => {
  return Math.random() * (max - min + 1) + min;
}

// Generate normal/Gaussian distribution within range
let randomNoFromRangeG = (min, max, sums = 3) => {
  return randomGaussian(sums) * (max - min + 1) + min;
}
let randomGaussian = (sums) => {
  let r = 0;
  for (let i = sums; i > 0; i--) {
    r += Math.random();
  }
  return r / sums;
}

// Generate random color
let randomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
}
