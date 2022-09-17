"use strict";
// ========================= FUNCTION BASICS ===============================
let greet;
// greet = 'hello';
greet = () => {
    console.log("hello, again");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
// add(5, 10)
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
result = 'minus';
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetings = (user) => {
    console.log(`${user.name} says hello`);
};
let test = 2;
test = "3";
test = 3;
let hehe = 1;
// console.log(hehe)
// ========================= FUNCTION SIGNATURES ===============================
// example 1
let greetOne;
greetOne = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greetOne = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
// possible to return undefined
calc = (numberOne, numberTwo, action) => {
    if (action === 'add') {
        return numberOne + numberTwo;
    }
};
calc = (numberOne, numberTwo, action) => {
    if (action === 'add') {
        return numberOne + numberTwo;
    }
    else {
        return numberOne = numberTwo;
    }
};
// example 3
let logDetailsTwo;
logDetailsTwo = (ninja) => {
    return console.log(`${ninja.name} is ${ninja.age} years old`);
};
