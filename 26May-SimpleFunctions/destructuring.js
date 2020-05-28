
let employee = {
    name: 'Perry',
    department: 'BUCS',
    salary: 200000,
    mgr: 'bob'
}
//does not matter what orer the params are in with this construct
const printDept = ({department: d,salary: s, mgr = 'fred' }) => console.log(`${d} ${s} ${mgr}`) //destructuring
printDept(employee)

let [left, right] = [5, 7];
console.log(`Left: ${left}`);
[left, right] = [right, left] //reverse the values
console.log(`Left: ${left}`)


//Rest operator
const printName = employee => console.log(`${employee.name}`)
printName(employee)

const printJustName = function (employee, ...bob) { //useful functions on Iterables - for...of (vals) and for...in (keys in a hash or map or object)
console.log(`${employee.name}`);
console.table(`${bob}`);
console.log(`Third arg is a ${typeof(bob[2])}`)
}

printJustName(employee, 200000, 'North Attleboro',
    _ => console.log(`a function`)
    )
console.table(employee)


// let foo = 123;
// let bar = 456;
// let baz = 789;
//
// function summer (arg1, arg2, ...rest) {console.log(arg2)}
// summer(1,2,3,4,5,6)
//



let employeeWithFunc = {
    name: 'Perry',
    department: 'BUCS',
    salary: 200000,
    mgr: 'bob',
    getSalary: _ => this.salary
}
//grab a single item out of an object with destructuring
let {mgr} = employeeWithFunc
console.log(mgr)
let {getSalary} = employeeWithFunc;
console.log(`${getSalary()}`) //this won't work since employeeWithFinc is really just a collection of
                                //variables, we're just using the variable name as a convenience. So,
                                //there's no 'this' as in an instantiate object, and if we try to
                                //pull out the getSalary method, when we run it it doesn't really
                                //point at anything, and so returns undefined

