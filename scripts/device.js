// Get window dimensions from device
let n;
let packing = 20;

// Check device size, update max particle population size (n) ensuring value is even and divided by packing value
const deviceSize = () => {
    onlyEven = Math.round((document.documentElement.clientWidth + document.documentElement.clientHeight)/packing);
    
    if (onlyEven % 2 == 0) {
        n = onlyEven;
    } else {n = onlyEven + 1;
    }
}
