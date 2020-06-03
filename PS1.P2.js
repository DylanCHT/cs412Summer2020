const ipt1 = '4+2';
const ipt2 = '5*7';
const ipt3 = '6-1';
const ipt4 = '8+9';
const operator = text => {
    if (typeof text != 'string')
        return new Error('Input type is not string');
    return eval(text);
};
console.log(`${ipt1} = ${operator(ipt1)}`);
console.log(`${ipt2} = ${operator(ipt2)}`);
console.log(`${ipt3} = ${operator(ipt3)}`);
console.log(`${ipt4} = ${operator(ipt4)}`);
