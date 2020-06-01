
function* arrayElements () {
    yield* [5,4,3,2,1]; //yield one thing at a time (*)...without it, the entire array is yielded
}

function* someValues () {
    const ae = arrayElements();
    yield ae.next()
}

const values = someValues();
let val = values.next()
val = ae.next()
