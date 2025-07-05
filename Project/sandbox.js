var character = "neetu";
console.log(character);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
// Declare an array of numbers
var arrayNumber = [1, 2, 3, 4, 5];
// Push a new number to the array
arrayNumber.push(8);
// Output the array
console.log(arrayNumber);
// arrayNumber.push("sd") Argument of type 'string' is not assignable to parameter of type 'number'.
//mixed array
var mixed = ['sd', 4, "s"];
mixed.push(5);
mixed.push(false);
//tsc sandbox.ts and it will automatically make sandbox.js
