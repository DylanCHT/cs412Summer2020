//the test file is the source of truth, because tests are written from the specification

const addNums = require('../driver').addNums;
const subNums = require('../driver').subNums
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Functional tests', () => {

    let foo = {
        prop1: 'a property',
        prop2: 'another property'
    };

    it('should return null when passed null as a param', function () {

        let sum = addNums(40,null);
        expect(sum).to.be.null;
    });
    it('should return 42 when adding 40 and 2', function () {
        let sum = addNums(40,2);
        expect(sum).to.be.equal(42);

    });
    it('should return a number', function () {
        let sum = addNums(Number(4), Number(5));
        expect(sum).to.not.be.NaN;
    });
    it('should return a number less than 100 when given 9 and 1', function () {
        let sum = addNums(9,1);
        console.log(`${sum}`)
        expect(sum < 100).to.be.true;
    });
    it('should  return a string when passed a string param', function () {
        let sum = addNums('40','2');
        expect (sum).to.be.a('string');
    });
    it('should have a property named prop2', function () {
        expect(foo).to.have.property('prop2');
        expect(foo.prop2).to.be.a('string');
        expect(foo.prop2).to.be.equal('another property');
    });
})

describe('Subtraction tests', () => {
    it('should return a positive number when left > right', function () {
        let diff = subNums(55, 17);
        expect(diff).to.be.greaterThan(0);
    });
});
