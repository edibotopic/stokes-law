// Set total particles based on device size and thin numbers to reduce noise and increase performance

let thinning = 30; // This value for thinning particle numbers was selected based on mobile performance (limiting case)
let total, onlyEven; // Required for appearance of smooth animation without flickering

// Check device size, update particle population size (total) ensuring value is even and divided by thinning value
const deviceSize = () => {
  onlyEven = Math.round(
    (document.documentElement.clientWidth +
      document.documentElement.clientHeight) /
      thinning
  )

  if (onlyEven % 2 == 0) {
    total = onlyEven
  } else {
    total = onlyEven + 1
  }
}
