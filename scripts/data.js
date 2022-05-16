//TODO: calculate average and std dev for display

let sum = ballArray.reduce((accumulator, curValue) =>
    accumulator + curValue.dy, 0)

let avg = ballArray.reduce((accumulator, curValue) =>
    accumulator + curValue.dy / ballArray.length, 0)

// FIXME: sum diff between value and mean -> square and divide by array length -> sqrt whole thing
let std = ballArray.reduce((accumulator,curValue) =>
    Math.sqrt(Math.accumulator + (curValue.dy - avg)**2 / ballArray.length,0))
