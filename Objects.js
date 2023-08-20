/* What are objects?
The real world is full of objects!
Ex: book,song,library,playlist

Real objects have associated attributes
Ex: book title, book author, book availability (at library)

Real objects have associated actions
Ex: checkout the book (from library)
 */

/*What are JavaScript objects?
Representations of real world objects - using code!
Ex: book, song, library, playlist

JavaScript objects have associated properties
Ex: book has title, author, isAvailable

JavaScript objects have associated methods
Ex: You can checkIn, checkOut a book
*/

/*
* BASICS        : What are Objects?
* SYNTAX        : Defining Objects
* CREATION      : Object Literals & Contructors
* PROPERITIES   : Associated Variables
* METHODS       : Associated Functions
* "this"        : Associated Context
*/

const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false,

    checkIn: function(){ 
        this.isAvailable=true;
    },
    checkOut: function(){
        this.isAvailable=false;
    }
};
console.log("book is",typeof book); 

/* Object Syntax & Creation (literal)
Collection of unordered name=value pairs!
Think hashMaps (name is key, maps to value
Ex: title="1984", checkin=function(){..}

This is an example of an object literal
It's the easiest way to create a JavaScript object at definition 
Just enclose name-value pairs in {} - separated by commas

You can also create objects in other ways
Ex: Using "new" with an object or function constructor
 */

/*Object Creation (constructor)
Think of constructor as "templates"
Create instances using the "new" keyboard
Object is the 'template' for a base or vanilla object

Once constructed, you can add or modify the properties and methods just as before
Object created with new "new" act just like those from literals
We won't cover function constructors or object prototypes (for inheritance)
*/

const boook = new Object();
boook.title = '1984';
boook.author = 'George Orwell';
boook.isAvailable = false;
boook.checkIn = function(){
    this.isAvailable=true;
};
boook.checkOut = function(){
    this.isAvailable=false;
};
console.log("boook is",typeof boook)

/* Object Properties (attributes)
Properties have immutable names and mutable values
Naming uses the same conventions as variables

Access Approach 1: Dot notation
Use: <object>.<name> (like with whitespaces)
Ex: book.title gives "1984"

Access Approach 2: Bracket notation
Use: <object>["name"] (like with hashmaps)
Ex: book["title"] gives "1984"
*/

/* Object Methods (actions)
Methods are special properties whose values are function defintions
They are used to define tasks that operate on object data

Access methods just like properties
Ex: book.checkIn gives [Function: checkIn]
Ex: book["checkIn"] gives [Function: checkIn]

Invoke methods just like functions
Ex: book.checkIn() executes that method
Ex: book["checkIn"]() does likewise
*/

const Booook = {
    isAvailable: false,
    checkIn: function(){ 
        this.isAvailable=true;
        return this;
    }
}
console.log(boook.checkIn());

/* The "this" keyword(context)
Functions need access to runtime context.
(Object) methods may need access to peer property values
(Standalone) functions may use global variables in execution

"this" maps to relevant context at runtime
Maps to enclosing object - for object methods
Maps to global object - for standalone functions
May be undefined (strict mode) or changed (eg, use apply)

About the global object
default to window object in browser runtime
default to global object in Node.js runtime
use "globalThis" ti reference the global object consistently
 */

const booook = {
    isAvailable: false,
    checkIn: function(){
        this.isAvailable=true;
        return this;
    }
};
console.log(booook.checkIn()); //prints booook object

function checkIn(){
    return this;
}
console.log(checkIn()); //prints global object;