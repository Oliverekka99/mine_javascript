// List or collection of values
// Arrays can contain many different values of different data types
// Each value has an index
// An index is a unique numerical value that represents the value in the array
// Array Lenght
// After an array is created, you can check its lenght at any time with arrayName.lenght

console.log("\n********Creating an array*********\n");
let arrayLenght = 5;
let arr0 = [];
let arr20 = Array(arrayLenght);
console.log("\n*********Getting array lenght********\n")
console.log(arr0.length)
console.log(arr20.length)

// You can create an array with data in one statement
// 

let arr1 = ["A",true,2];
console.log(arr1[0]);
console.log(arr1[1]);

let arrayLenght2 = 2;
let arr9 = new Array(arrayLenght2);
arr9[0] = "Value at index 0";
console.log(arr9[0]);
console.log(arr9[1]);//no value at this index
console.log(arr1.length-1);

// Push and Pop - Affects end of array
// array.push(values) adds one or more value to end of array and returns its new lenght
// array.pop() removes value from end of array and returns removed value

// Shift and Unshift - Affects front of array
// array.shift() removes value from front of array and returns removed value

console.log("\n*********Push and Pop methods in array")
console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

console.log("\n********Shift and Unshift methods in array")
console.log(arr1.unshift("new value"));
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);

console.log("\n*********Concat method in array*******")
console.log(arr20.concat(arr9));
console.log(arr1.concat(arr9));