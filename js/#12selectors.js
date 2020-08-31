console.log("Lets start learning about Selectors in JS");
/*
element selectors:
1. Single element selector
2. Multi element Selector
*/

// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Learning Javascript is amazing';
element.innerHTML = '<b>Learning Javascript is amazing</b>';
// console.log(element.innerHTML);

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
console.log(sel);

// 2. Multi element selector
// This helps to select more than one element from DOM
let elems = document.getElementsByClassName('child[1]');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue';
// });

// OR

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
}

// console.log(elems[0].getElementsByClassName('child'));