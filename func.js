// Why are functions useful?
/* Readability & Conciseness -> Say a task takes 10 lines of code and is 
used 5 times in your program Reduce code size, make functionality clear
*/ 
/* Mainntainability -> Need to fix a bug in execution statements? Or 
change the execution code? Do this in one place (not 5 separate places)
*/

// function isCountingDown(var1,var2) {
//     if (var1 > var2)
//         return true;
//     return false;
// }

// Definition has {}, no semicolon -> is a blueprint for the steps that need to be taken to execute the task
// Invocation () operator, semicolon terminated -> is a statement that executes function code.
// Parameters replaced with arguments(inputs) resulting in customized execution
// isCountingDown("bil","isj")

// 3.
// function Naming
// Like variable name conventions
// Use alphabets, numbers, $ and _
// No other special characters allowed
function say_hy(name) {
    console.log("helo",name)
}
say_hy("kim")

// Function ".name" property
// Return the name of the function
// Return "anonymous" for anonymous functions
console.log(say_hy.name);


// Anonymous functions ->

// 4.
// Are placehoders for input values
// Are optional.Zero-pararmeter function exist!
// When invoked, parameters are replced by data values (arguments) for actual function execution.

// Arguments type/number are not checked against definitions
// Missing values will be set to undefined!
// This can have unanticipated results if you don't validate your arguments within the function.

// 5.
/* Function Return
Exit point for functions -> The return statement is optional.
There is an implicit return after the last statment defined within the {}

Use return statements to return relevant output(results) to the invoker.
Example: return true if the first argument is larger than the second; else return false.

If no return statement is defined, the returned result is undefined.
*/


