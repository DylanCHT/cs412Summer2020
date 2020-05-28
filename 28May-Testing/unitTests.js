//don't forget to set the test up in Webstorm "Run" menu

const {describe, it} = require('../node_modules/mocha') //mochajs.org for docs  (runner)
const {expect} = require('../node_modules/chai') //chaijs.com for docs (individual tests)

const {adder} = require('../modules/math'); //use destructuring, picking out one function

describe('High level addition testing', () => {

    //Set up initial conditions, if there are any (there aren't in this case)

    //Set up individual unit tests
    it('should return 42 for inputs of 40, 2', function () {
        let sum = adder(40,2);
        expect(sum).to.be.equal(42);
    });
    it('should return 42 for inputs of 2, 40', function () {
        let sum = adder(2,40);
        expect(sum).to.be.equal(42);
    });
    it('should return a Number type', function () {
        let sum = adder(2,40);
        expect(sum).to.not.be.NaN; //NaN = Not a Number
    });

})
