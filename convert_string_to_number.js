// parseInt() and parseFloat() -> Convert strings to numbers
// Convert numberts to strings
// Adding non-numerical characters can have unintended results
// parseFloat() is for floating point numbers, numbers with decimal points

// toString() -> Convert numbers to numerical strings

let num1 = '150';
let flo1 = '1.50';
console.log("********Converting strings to integers*******")
console.log(parseInt('100'));//100
console.log(parseInt(num1));//150
console.log(parseInt('ABC'));//NaN
console.log(parseInt('0xF'));//Hexadecimal number

console.log("********Converting strings to Floats*******")
console.log(parseFloat('1.00')); //1
console.log(parseFloat(flo1)); //1.5
console.log(parseFloat('ABC')); //NaN

console.log("********Converting examples*******")
// Numbers after special characters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));//ignore after + //1

console.log("********Converting numbers to strings*******")
// Using Template Literals
console.log(parseInt(`${1 + 1}`));

let num11 = 150;
let flo11 = 1.50;
console.log(num11.toString());
console.log(flo11.toString());
console.log((100).toString());