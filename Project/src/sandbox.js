"use strict";
// String Variable
const character = "neetu";
console.log(character);
//DOM Selection using querySelectorAll
// This selects all input elements on the page
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((input) => {
    console.log(input); // Logs each input element
});
//  Number Variable
let numbers = [1, 2, 3, 4, 5]; // Explicitly typed as number[]
numbers.push(6); // add at last
numbers.unshift(5); // add at first
numbers.splice(2, 0, 25); // start index, delete count and added value
//  Mixed Array
let mixed = ["sd", 4, "s"]; // Type: (string | number)[]
mixed.push(5);
// mixed.push(false);  Error: boolean is not assignable
console.log(mixed); // ['sd', 4, 's', 5]
// Explicit Type Array
let fruits = ["apple", "banana"];
fruits.push("mango");
// fruits.push(5);  Error: number is not assignable to string
console.log(fruits); // ['apple', 'banana', 'mango']
//  Tuple (Fixed structure)
let user;
user = ["Neetu", 22];
// user = [22, "Neetu"];  Error: order and types matter
console.log(user); // ['Neetu', 22]
// Object with Type Inference
const person = {
    name: "Neetu",
    age: 22,
};
// person.name = 33;  Error
console.log(person.name); // Neetu
//  Object with Explicit Type
let student;
student = {
    name: "Ankit",
    age: 23,
    enrolled: true,
};
console.log(student);
//  Any Type (Avoid this if possible)
let something = "Hello";
something = 123;
something = true;
console.log(something); // true (no type safety)
//  Function with Parameter and Return Types
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Neetu")); // Hello, Neetu
//  Union Types
let code;
code = 101;
code = "ID-202";
console.log(code);
const user1 = {
    username: "Neetu",
    age: 20,
};
console.log(user1);
