const getOperator = operator => {

    switch (operator) {

        case '+':
            return (left, right) => left + right;
            break;
            
        case '-':
            return (left, right) => left - right;
            break;
    }

}
//One way to call it...
const mathFunction = getOperator('+');
console.log(`${mathFunction}`)
console.log(`Value: ${mathFunction(37, 12)}`)

//Another way...
console.log(`The other way... ${getOperator('+')(37,12)}`)
