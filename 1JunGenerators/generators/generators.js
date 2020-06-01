//Some example generators - they work with iterables
//my understanding - fat arrow does not work in generators

function* listGen() {

    yield 1; // = yield = spit next value out
    yield 2;
    yield 3;
}

//Use next() on generator to yield next result

const x = listGen();
//let result = x.next();

// while (!result.done) {
//     console.log(`Result: ${result.value}, Done: ${result.done}`)
//     result = x.next();
// }
let results = [...x]
console.log(`The generator returned ${results}, type of results is ${typeof (results)}`)


//
// console.log(`x: ${x}`);
// let result = x.next();
// console.log(`Result: ${result.value}, Done: ${result.done}`)
//  result = x.next();
// console.log(`Result: ${result.value}, Done: ${result.done}`)
//  result = x.next();
// console.log(`Result: ${result.value}, Done: ${result.done}`)
//  result = x.next();
// console.log(`Result: ${result.value}, Done: ${result.done}`)
// console.log(`Next value: ${x.next()}`)
//
