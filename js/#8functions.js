console.log('this is about functions');

let i = 234;

console.log(i);
function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("Shristi"), i);

// default value of thank
// function greet(name, thank='Thank You'){
//     let msg = `Goodmorning ${name} Each morning is a fresh start in our lives and it gives us an opportunity to press the reset button and approach life differently each day. There can't be a more positive start to your day than  good morning wishes with rose from your loved ones. ${thank}`;
//     return msg;
// }

let name = 'SkillF';
let name2 = 'Rohan';

// console.log(`Goodmorning ${name} Each morning is a fresh start in our lives and it gives us an opportunity to press the reset button and approach life differently each day.  There can't be a more positive start to your day than  good morning wishes with rose from your loved ones.`);
// console.log(`Goodmorning ${name2} Each morning is a fresh start in our lives and it gives us an opportunity to press the reset button and approach life differently each day.  There can't be a more positive start to your day than  good morning wishes with rose from your loved ones.`);

// greet(name, 'Thanks a lot!');

// let val = greet(name, 'Thanks a lot!');

const mygreet = function(name, thank='Thank You'){
    let msg = `Goodmorning ${name} Each morning is a fresh start in our lives and it gives us an opportunity to press the reset button and approach life differently each day. There can't be a more positive start to your day than  good morning wishes with rose from your loved ones. ${thank}`;
}

let val = mygreet(name, 'Thanks a lot!');
console.log(val);

const myObj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myObj.game());


arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index);
});