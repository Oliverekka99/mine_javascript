// Simple type system
// Number(float), String, Boolean, Date, Function, Array and Object
// Simple Types
// NaN, null, undefined

// In JavaScript, our variables are defined in a pseudo dynamic way,

// Checking type
// typeof operator -> Returns a string of the data type primitive
// instanceof operator -> Returns a Boolean of if a value matched the data type

// let x = 'something';
// x = 1;

// x = 1 + 'hello'; // is x a string or number? //1hello
// javascript convert x's value into string first then it concatenate because only strings can add/concatenate


// let y = 0 == ''; //false equal false means //true
// let y = 0 === ''; //is the no. zero equal to an empty string //no //false
//type safe comparison b/w two values

const people = ["locus", "point", "Neol"]
// const one = 1;
const one = new Number(1); //using constructor
// const str = "Hello World";
const str = new String("Hello World"); //using constructor
// const b = true;
const b = new Boolean(true); //using constructor
const person = {
    firstname: "live",
    lastname: "longer"
} //object variable

function sayHello(person) {
    console.log("Hello " + person.firstname)
}
console.log("--typeof--")
console.log(typeof people); //array //object
console.log(typeof one); //object
console.log(typeof str); //object
console.log(typeof b); //object
console.log(typeof person); //object
console.log(typeof sayHello); //function
//typeof operator protest against the primitive type insiide of the JavaScript type System
// An array in JavaScript is actually an object with couple of extra methods & properties on it that make it behave like an array.

console.log("--instanceof--");
console.log(people instanceof Array); //true
console.log(one instanceof Number); //true
console.log(str instanceof String); //true
console.log(b instanceof Boolean); //true
console.log(person instanceof Object); //true
console.log(sayHello instanceof Function); //true
// when we're doing an instance of test, it compares against the instance constructor that is used to create the variable
