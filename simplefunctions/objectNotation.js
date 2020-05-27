//JSON and objects -> JavaScript Object Notation (useful for data transfer, among other things)

const employee = {
    name: 'Perry',
    department: 'BUCS',
    // getName: _ => this.name,
    // constructor: _ => {} //we'll play with this later
} //POJO -> Plain old JavaScript object (sometimes Abstract Data Object)

console.log(`Name: ${employee.getName()}`) //[object Object]
console.table(`Name: ${employee}`)

//Now instantiate the object
//let anEmployee = new employee()

//haven't used 'new', so no instantiated object and 'this' isn't pointing to anything
