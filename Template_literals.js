// Template literals
// Flexible Formatting
// Synatx makes strings easier to format and read
// Use placeholders ${} for variables or expressions
// Respect line breaks. Doesn't need newline character "\n"

// Use backticks
// Template literals only require the backtick character ``, placed at the beginning and end of a string. No need for quote characters.

// Concatenatio with Template literals
console.log("\n**********Concatenation with template literals*********\n");

let str1 = "Javascript";
let str2 = "fun";

console.log(`I am writing code in ${str1}`); //reference them by name & insert them into the placeholders to complete the sentences.
console.log(`Formatting in ${str1} is ${str2}!`)

// Expressions in Template Literals
console.log("\n*********Expressions in template literals**********\n")

let bool1 = true;
console.log(`1 + 1 is ${1 + 1}`); // Expression evaluated & then printed 2
console.log(`The opposite of true is ${!bool1}`); //false
