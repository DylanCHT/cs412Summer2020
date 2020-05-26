//hoisting can result in clashing variable names (duplicates)
//IIFE - immediately invoked function expression

//two scopes for 'var' variables (or nothing at all):
// 1 To the enclosing function
// 2 To the file

(function iife() {
        //everything in here is scoped to the file and won't leak out of the iife
        var foo;
        var bar;
        var subber = function (left, right) {
            return left - right
        }
    }
    ()
);
