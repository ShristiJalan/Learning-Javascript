console.log("We are in objects.js and lets discuss about array and objects");
let marks = [34, 23, 24, 93, 73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'orange');
console.log(marks);
// console.log(mixed);
// console.log(fruits[1]);

// console.log(arr.length);
// console.log(Array.isArray('dfdf'));

// you can even change array
arr[0] = 'Shristi';
let arrelement = arr[0];
// console.log('element:',arrelement);
// console.log(arr); 

let value = marks.indexOf(73);
// console.log(value);

// Mutating or Modifying arrays
// marks.push(3564);
// will push 3564 element in marks array at the end

// marks.unshift(1009);
// will push 1009 element in marks array at the start position

// marks.pop();
// From the end remove one element

// marks.shift();
//will remove one element from the starting

// marks.splice(1, 2);
// 1st arguement - from where you want to start removing the elements
// 2nd arguement - how many elements you want to remove

// marks.reverse();
// there is no return value as the original array is getting changed

let marks2 = [1, 2, 3, 47];
marks = marks.concat(marks2);
// console.log(marks);

// Objects

let myObj = {
    'first name': 'shristi',
    status: 'student',
    isActive: true,
    marks: [23, 45, 89, 92]
}

console.log(myObj);
console.log(myObj['first name']);
console.log(myObj.isActive);