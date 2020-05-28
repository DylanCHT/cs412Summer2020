//let adder = require('./math').adder;  //a single function
const math = require('./math')   //everything that was exported from the module
//import {adder as somethingFancier, PI} from "./newMath.mjs";


const {subber} = require('./math'); //use destructuring, picking out one function

let sum = adder(4,5);
console.log(`Sum: ${sum}`);

//let difference = math.subber(4, 5);
let difference = subber(4, 5); //uses the 'destructured' subber assignment
console.log(`Diff: ${difference}`);

let quotient = math.divver(16, 4)
console.log(`Quotient: ${quotient}`)

math.math();


//common module format = old-style Node require statements .js files
//ESM = EcmaScript Module using export / import .mjs files
//and the two don't currently mix
