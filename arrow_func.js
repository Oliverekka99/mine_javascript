// Arrow func in JS -> Sometimes called 'fat arrow functions'
/*
 =>
Changes to the this context
Support implicit return values
Must be assigned to a variable, or immediately used 
Reduction in characters typed
*/

const add = (a,b) => a + b;
console.log(add(1,2));

const subtract = (a,b) => {
    return a - b;
};
console.log(subtract(2,1));

/* this context
inherited from parent scope
Cannot be changed
Maintained when function is passed as a reference
*/
/* Implicit Return
Single line functions return statement result
Use {} to introduce multiple lines
*/