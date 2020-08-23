console.log('We are going to learn about Properties, methods and Template Literals in Javascript');
const name = 'Harry';
const greeting = 'Good Morning';
// console.log(greeting + ` ` + name);

let html;
html = "<h1> this is heading</h1>"+
        "<p> this is my  para </p>";

html = html.concat('this', 'str2');
console.log(html);
// console.log(html.length);
// .length function will count the length of the string

// console.log(html.toUpperCase());
// .toUpperCase() function will convert the complete string in UpperCase

// console.log(html.toLowerCase());
// .toLowerCase() function will convert the complete string in LowerCase

// console.log(html);
// it won't change the original content of the string

// console.log(html[1]);
console.log(html.indexOf('hssdfsd1'));
// the element which is not present inside the string will show its index as -1

console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('str2'));
console.log(html.includes(' '));
console.log(html.substring(1,3))
console.log(html.slice(-4))