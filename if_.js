// Boolean Logic with if statements
// comparing values in JavaScript
// < less than 
// <= less than equal to 
// > greater than
// >= greater than equal to

// console.log(`${'42' == 42}`); //true
// console.log(`${'42' === 42}`); //false 
// Best practice always use ===

// != non equal regardless of data type
// !== non equal and data types //best pratice

// no {} needed if using single line
const Status = 200;
if (Status === 200) {
    console.log('OK!');
} else if (Status === 400){
    console.log('Error!');
} else {
    console.log('Unknown status');
}
// Ternary (instant)
const message = (Status === 200) ? 'OK' : 'Error';