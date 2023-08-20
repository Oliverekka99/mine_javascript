// Combing two or more more strings
// Can join a combination of variables and/or actual strings (also known as string literals)
// Concatenating strings will make a new string

let str1 = "Hello";
let str2 = "World!";

// Using the + operator
console.log("********Using the + operator********\n");
console.log(str1 + str2);
console.log(str1 + "Big" + str2);

console.log("\n*********Adding Spacing********\n");
// Adding Spacing
str1 = "Hello ";

console.log(str1 + str2)
console.log(str1 + "Big " + str2);

console.log("\n*********Be careful with numbers!********\n");
// Be careful with numbers!

let num1 = 1;
let num2 = "1";

console.log(num1 + num2); //1 + string = 11 , javascript assumes num1 also as string
console.log(num1 + 1); //2