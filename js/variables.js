// Variables in js
// var, let, const
var name = 'harry';
var channel;
var marks = 0;
console.log(name, channel, marks);
// Rules for creating Javascript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are Case Sensitive
*/
var city = 'Delhi';
console.log(city);
// ownersName = 'Harry'; //Cannot do this (error)
const ownersName = 'Hari Ram';
console.log(ownersName);
// const fruit  ......... Cannot do this it is mandatory to initailize const variable 
{
    let city = 'Ranchi';
    city = 'Kolkata';
    console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53,3];
// arr1 = [34, 23, 56]; .. you cannot do like this, you cannot redeclare the array
// arr1.push(45); .. you can add elements to the array
console.log(arr1);

/* Most common programming case types:

1. camelCase
2. kabab-case
3. snake_case
4. PascalCase

*/