//return is implied
const adder4 = (left, right) => left+right;  //fat arrows came from CoffeeScript (which is transpiled)

const adder = (left, right) => {  //return NOT implied
    if (left > right) {
        throw new Error('wrong direction')
    }
    return left + right;
} //new ES6 style function with 'fat arrows'

function adder2(left, right) {
    return left + right;
}

adder3 = function(left, right) {  //old style (ES5) notation
    return left + right;
}

const printer = () => console.log(`Just print`)


console.log(`2 + 40 is ${adder(2,40)}`) //string interpolation with the ` character
console.log('2 + 40 is ' + adder2(2, 40)) //old style
console.log('2 + 40 is', adder3(2, 40)) //old style

console.log(adder); //this prints type info

adder; //does not run
adder(4,20) //parens execute function

printer(); //no params here
