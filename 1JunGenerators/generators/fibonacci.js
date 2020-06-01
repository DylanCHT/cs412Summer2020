//Fibonaccis
//0 1 1 2 3 5 8 13...
// function* fibs() {
//     let [val1, val2, result] = [0, 1, 0] //use destructuring to assign values
//     while (true) {
//         result = val1 + val2;
//         [val1, val2] = [val2, result]
//         // val1 = val2;
//         // val2 = result;
//         yield result;
//     }
// }
//
// let myFibs = fibs();
// let count = 6;
//
// while (count --> 0) { //there is no '-->' operator in JS
//     console.log(`Next fib: ${myFibs.next().value}`)
// }

//Knuth: Get it working, get it right, get it fast


function* fibs2 (x = 0) {
    let [val1, val2, result] = [x, x-1, 0];
    while (true) {
        result = val1 + val2;
        [val1, val2] = [val2, result]
        yield result;
    }
}
myFibs2 = fibs2(2);
count = 10;

while (count --> 0) { //there is no '-->' operator in JS
    console.log(`Next fib: ${myFibs2.next().value}`)
}


let foo = "this is a string"
foo.split('s')
