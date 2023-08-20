// Othr Boolean notes
// Implicit false values
// Strings -> Empty strings test as false
// Objects -> Null or undefined objects test or false
// Numbers -> 0 test as false

// Strings are case sensitive
// const x = 0;
// if (!x){ // ! use to reverse
//     console.log('x contains *NO* value');
// }

// const Name = 'christopher';
// if (Name === 'Christopher') {
//     console.log('The values are the same');
// } else {
//     console.log('The values NOT are the same');
// }

// Combining comparisons
// And (both sides must be true)
// (x & y)
// (x && y) //best practice
// Or (either side can be true)
// (x | y)
// (x || y) //best practice

// const Status = 200;
// if (Status === 200) {
//     console.log('OK!');
// } else if (Status === 400 || Status === 500){ // '||'skips the second condition
//     console.log('Error!');
// } else {
//     console.log('Unknown status');
// }


const STATUS = 200;
switch (STATUS) {
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
        console.log('Error');
        break;
    default:
        console.log('Unknown value');
        break;
}
