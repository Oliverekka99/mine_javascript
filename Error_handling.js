// Exception -> Interruption in the intended execution of code

// Error -> Unintended interruption in execution of code, typically show up as exceptions
// Syntax errors are a type of execution that occurs when incorrect syntax is used

// Throwing an Exception
// Sending a message that something has gone wrong in the intended execution of code, this can be thrown by JavaScript or by the developer with the throw keyboard


// Uncaught Exceptions -> Exceptions that have been thrown when code has no guidance to handle the interruption
// Users may see unhelpful obscure messages, or none exist
// Catch exceptions with try..catch..finally

// Try -> Block of code that may throw an exception
// Catch -> Block of code that will run if an exception is thrown
// Finally -> Optional enclosed part of code that will run after the try block or after the catch block
// Runs every time even if an exception is not thrown

// try..catch
// try {
//     criticalCode();
// } catch (ex) {
//     console.log("Got an error");
//     logError(ex);
// }
// 

// try {
//     throw "An exception that is thrown every time";

// } catch (ex) {
//     console.log("Got an error");
//     logError(ex);
// }

// try..catch..finally
// try {
//     criticalCode();
// } catch (ex) {
//     console.log("Got an error");
//     logError(ex);
// }
// finally {
//     console.log("Code that always will run");
// }