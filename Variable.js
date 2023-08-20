// var - Function scoped
        // Can be changed in scope
        // Available before declaration

var one = 1;
let two = 2;
const three = 3;

// let - Block scoped 
        // Can be changed in scope
        // Only available after declaration

// Const - Block scoped, like let
        // Cannot be changed
        // Only available after declaration

// What to use when?
// const by default
// let in loops

// var hello = "HELLO";
// console.log(hello);

// if (true) {
//     let world = "Hello World";
//     console.log(world); //world variable is block scope
// }

const bumro = "buck" //can't reassign value
console.log(bumro)
