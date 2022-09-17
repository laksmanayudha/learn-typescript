// ========================= INTRODUCTION ===============================
let character: string = 'mario';
let age = 30;
let isBlackBelt = false;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

// console.log(circ("2"))
// console.log(circ(2))

// ========================= ARRAYS AND OBJECT ===============================

// ARRAYS
let names = ['luigi', 'mario', 'yoshi'];
names.push(3);
names[0] = 3;
// console.log(names)

names = "string"

let numbers = [1, 2, 3];
numbers.push('4');
// console.log(numbers);

let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed.push(true);

// OBJECTS
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.age = 50;
ninja.name ='yudha';
ninja.age = '89';
ninja.skills = ['fighting', 'sneaking'];

// if u want to override the whole object and properties
ninja = {
    name: 'dede',
    belt: 'red',
    // age: 90,
    age: 80
    // skils: ['music', 'games']
}

// ========================= EXPLICIT TYPES ===============================
// explicit types
let char: string;
let theAge: number;
let isLoggedIn: boolean;
let myarray: Array<number> = [2, 3, 5];

theAge = 'luigi';
isLoggedIn = false

// ARRAYS
let ninjas: string[];
let newNinjas: string[];
let newNinjasTwo: string[] = [];
let newNinjasThree: [] = [];

ninjas = [1, 2, 3];
ninjas = ['1', '2'];
// newNinjas.push('2'); // undefined method push
newNinjasTwo.push('5');

newNinjasThree.push(1);

// UNION TYPES
let mixeds: (string|number)[] = []
mixeds.push('hello');
mixeds.push(10);
mixeds.push(true);

// console.log(mixeds)

let uid: string|number;
uid = 123;
uid = '123';
uid = true;

// OBJECTS
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = [1, 2, 4]; // object Array
ninjaOne = 'hello';

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = { name: 'hello', age: 44, beltColor: 'red'}
ninjaTwo = { name: 'hello', age: 44, beltColor: 'red', test: ''}

// ========================= DYNAMIC (ANY) TYPES ===============================
let myAge: any = 25;
myAge = '25';
myAge = true;

let mixedTwo: any[] = [];
mixedTwo.push(5);
mixedTwo.push('five');
mixedTwo.push(true);
console.log(mixedTwo);

let ninjaThree: { name: any, age: any };
ninjaThree = { name: 25, age: 'dede' }
console.log(ninjaThree);