console.log("This program is about if-else statement in javascript");
const age = 18;
const doesDrive = true;
// const vari = 34;

// if(age!=19){
//     console.log('Age is 19');
// }

// else if(age == 65){
//     console.log('Age is 65');
// }

/* if you look carefully the you must have noticed that there we have given
    65 as a string input and here we are checking for a number 65 but then also
    in the console it is showing "Age is 65" because == operator checks for the 
    value not for both value and type. */

//  And if you want both type and value to get compared then use ===

// if(age !== 65){
//     console.log('Age is not 65');
// }
// !== means if value and type are not matching

// else if(age === 65) {
//     console.log('Age is 65');
// }

// else{
//     console.log('Age is not 19');
// }

// if(typeof vari !== 'undefined'){
//     console.log("vari is defined")
// }
// else{
//     console.log("vari is not defined");
// }

// if(doesDrive && age > 18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// Ternary Operator
// console.log(age==45? 'Age is 45': 'Age is not 45');

// Switch Case Statement
switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;
    default:
        console.log("Yor are not applicable");
        break;
}