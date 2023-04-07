// Total particles should be based on device size and thinned to reduce noise and increase performance
let total;
let thinning = 30; // This value was selected based on mobile performance (limiting case)

// Check device size, update particle population size (total) ensuring value is even and divided by thinning value
const deviceSize = () => {
    onlyEven = Math.round((document.documentElement.clientWidth + document.documentElement.clientHeight) / thinning);

    if (onlyEven % 2 == 0) {
        total = onlyEven;
    } else {
        total = onlyEven + 1;
    }
}
