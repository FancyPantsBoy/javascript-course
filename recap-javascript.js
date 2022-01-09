/* ----------- different primitive data types --------------- */
const variable1 = 1; // number
const variable2 = 'some text'; // string
const variable3 = true; // boolean
const variable4 = undefined; // undefined
const variable5 = null; // null

/* ----------- different reference data types --------------- */
const variable6 = {}; // object
const variable7 = []; // array
const variable8 = function () { }; // function

// to check for the type of a variable you can use the keyword typeof
const fn = function () { };
typeof ''; // string
typeof 1; // number
typeof true; // boolean
typeof undefined; // undefined
typeof null; // object
typeof []; // object
typeof {}; // object
typeof fn; // function

// to check if the variable is an instance of a certain class. instanceof

'' instanceof String; // false
[] instanceof Object; // true
fn instanceof Object; // true

/* ----------- variable declarations --------------- */
const constant = 1; // constant variable.
let scopedVariable = 2; // block scoped variable declaration. this is a block '{  }'
var scopedVariable2 = 3; // function block scoped variable declaration. 

/* ----------- conditional statements --------------- */
// first approach
if (condition) { }
else { }

// second approach
if (condition) { }
else if (second_condition) { }
else { }

/* ----------- loops --------------- */

while (condition) {
  // some code here
}

for (let index = 1; index < limit; index++) {
  // some code here
}

do {
  // some code here
} while (condition);

/* ----------- Arrays --------------- */
const array = [1, 'asdfasdf', function () { }]; // array declaration
[].length; // the length property of an array

// array methods
[].push(item); // adds element to end of array
[].shift(item); // remove element from start of array
[].unshift(item); // adds element to start of array
[].indexOf(item); // get the index of an item in the array. returns -1 if it doesnt exist
[].slice(start, end); // get a slice of an array from start to end. the end index is not included in the slice
[].splice(start, end, replace_with_this_item);// removes a slice of an array from start to end. the end index is not included in the slice
['sdfsd', 'ffd', 'aaac', 'vv', 'b',].filter((value) => { return value.includes('a') }); // filter an array based on a condition
[].forEach(callback); // loop over the elements of an array
[].map(callback); // map over the elements of an array
[].sort(callback); // sort the element of an array based on a condition
[].reverse(); // reverse the order of the array
[].includes(item); // checks if item is included in the array.


/* ----------- functions --------------- */

function myFunc() { } // a function declaration
let func = function () { }; // a function expression. the second part of the expression is called an anonymous function
let func1 = (a, b, c) => { // a function expression with arrow function.
  // somecode
}
(function (a, b, c, d) { })(1, '', [], {}); // immediatly invoked function expression (IIFE)

/* ----------- objects --------------- */
let obj1 = {};
let obj2 = new Object();
let obj3 = Object.create({});

function Identity() { // a constructor function for objects
  this.firstName = 'Ibrahim';
}

let obj4 = new Identity();

obj1.lastname = 'Voldmort'; // assign new property to object with a value
obj1['lastname'] = 'harry'; // access or create a property in the object

class Person {
  constructor() {
    this.name = 'Ibrahim';
    this.lastname = 'something'
  }
}