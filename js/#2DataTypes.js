// Primitive data types

// String
let name = "harry";
console.log("my string is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

//Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types

// Arrays
myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    RohanDas: 34, //You cannot give space between objects
    'Rohan Das': 34
}
console.log( typeof stMarks);

function findName() {

}
console.log( typeof findName);

let date = new Date();
console.log( typeof date);