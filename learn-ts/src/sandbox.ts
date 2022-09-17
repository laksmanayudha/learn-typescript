// ========================= FUNCTION BASICS ===============================
let greet: Function;
// greet = 'hello';

greet = () => {
    console.log("hello, again")
}

const add = (a: number, b:number, c?: number|string): void => {
    console.log(a + b);
    console.log(c);
}

// add(5, 10)

const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(10, 7);
result = 'minus';

// console.log(result);

// ========================= TYPE ALIASES ===============================
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum , item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetings = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

// can be used to describe the set of allowed value
type MyType = 1 | 2 | "3";
let test: MyType  = 2
test = "3"
test = 3

let hehe: 1 | 2 | 3 = 1;
// console.log(hehe)

// ========================= FUNCTION SIGNATURES ===============================
// example 1
let greetOne: (a: string, b: string) => void;

greetOne = (name: string, greeting: number) => {
    console.log(`${name} says ${greeting}`)
}

greetOne = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// example 2
let calc: (a: number, b: number, c: string) => number;

// possible to return undefined
calc = (numberOne: number, numberTwo: number, action: string) => {
    if(action === 'add'){
        return numberOne + numberTwo
    }
}

calc = (numberOne: number, numberTwo: number, action: string) => {
    if(action === 'add'){
        return numberOne + numberTwo;
    }else{
        return numberOne = numberTwo;
    }
}

// example 3
let logDetailsTwo: (obj: {name: string, age: number}) => void;

logDetailsTwo = (ninja: {name: string, age: number}) => {
    return console.log(`${ninja.name} is ${ninja.age} years old`);
}