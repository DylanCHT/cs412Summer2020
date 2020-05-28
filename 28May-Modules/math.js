//These end up being singletons

//IIFE . -- var has two scopes, 1: Enclosing function, 2: the file
//Remember that JS has no 'namespace' other than files
//(function () {

const PI = 3.14157;
const adder = (left, right) => left + right;
const subber = (left, right) => left - right;
const divver = (left, right) => {
    return _isDivisorZero(right) ? new Error('tried to divide by zero') : left / right;
}
const math = () => console.log(`In the math module`)
const _isDivisorZero = divisor => {
    return (divisor == 0)
}

module.exports = { adder, subber, PI, divver, math}

//})() Leaving this just for your reference (the IIFE)
