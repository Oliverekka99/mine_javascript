// What is JSON = JavaScript Object Notation
/* Language independent and user-readable.
Depends only on 2 data structures that are found in all modern programming languages
1.Collection of name-value pairs -> Comparable to objects. Think JavaScript object properties "stringified"
2.Ordered list of values -> Comparable to arrays. Think ability to pack collections of objects into single file for transfer
*/

// Object format
const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false
};
//  Converted to JSON
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

/* JSON Format
Data in name-value pairs that are separated by commas
Example: name-value pairs within an object, objects within an array-separated by commas

{} enclose single objects
Example: a single book
[] enclose multi-item arrays
Example: a collection of book copies
 */

// [
//     {
//         "title": "1984",
//         "author": "George Orwell",
//         "isAvailable": false
//     },
// ]

/* JSON.stringify
Serialize a JavaScript Object into an equivalent text string
Ex: stringify "book" object to a JSON string for network transfer or file storage

Serialize a collection of JavaScript Object into an ordered list
Example: stringify "array" of objects to a JSON string for transfer or file storage
*/

let copies = [book,book]
let jsonarray = JSON.stringify(copies);
console.log(jsonarray);

/* Deserialize a JSON-formatted text string into a JavaScript object 
Ex: reverts the previously-created string into a javaScript object literal with related properties 
To restore object methods, define constructors

Deserialize a JSON-formatted text string into a JavaScript array
Ex: reverts the previously-created string into a javaScript array with list order preserved
*/

let Booksback = JSON.parse(jsonarray)
console.log(Booksback)