// type conversion and type coerion
console.log("Welcome to TypeConversion concept of Js");
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = new Date();
// console.log(date, (typeof date));

let arr = [1, 2, 3, 4, 5];
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString());

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

// let number = parseInt('34.98');
let number = parseFloat('34.98');

console.log(number.toFixed(4), (typeof number));
// toFixed function is used to fix the number of decimal values after a particular value.

//Type coercion

let myStr = "698";
let mynum = 34;
// it converts number to string and concatenates it

console.log(myStr + mynum);