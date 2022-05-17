// NOTE: interesting that this only works
// if an even number is returned for n

let n;

const deviceSize = () => {

    onlyEven = Math.round((document.documentElement.clientWidth + document.documentElement.clientHeight)/20);
    
    if (onlyEven % 2 == 0) {
        n = onlyEven;
        console.log(n+" is even right away!")
    } else {n = onlyEven + 1;
        console.log(n+" is even after 1 is added!")
    }
}
