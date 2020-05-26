
//single line functions
const say = (message) => console.log(`Hey now, ${message}`); //with params
const say2 = () => console.log(`Hey now`); //without params or...
const say3 = _ => console.log(`Hey now`); //...this way with no params
//say();
//say('Howard')

//multiline function
const sayLong = (message) => {
    message = message.toUpperCase();
    console.log(`${message}`)
}
//sayLong('hey now')

//Take two params, one of them is a decorator function: Pass a striung, then
//run the decorator on it

const process = (message, decorator1, decorator2) => {
    let processed = decorator(message);
    return processed;
}

const doUp = (message) => message.toUpperCase();
const doLower = (message) => message.toLowerCase();
console.log(`${process('this is in lower case', doUp, doLower)}`)

console.log(`${process('this is also in lower case',
    (message) => message.toUpperCase()  //this is an unnamed (lambda) function
    )}`)

