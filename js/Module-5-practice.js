// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// function fna(name, wow) {
//     console.log(wow);
//     wow(name)

// }

// function fnB(userName) {
//     console.log(`Hello ${userName}`);

// }

// fna("Alice", fnB)

// function each(array, callback) {
//     const res = [];
//     for (const item of array) {
//         res.push(callback(item));

//     }
// return res;
// }

// console.log(each(
//     [64, 49, 36, 25, 16], function (value) {
//         return value * 2;
//     }
// ));

// console.log(each(
//     [64, 49, 36, 25, 16], function (value) {
//         return value - 10;
//     }
// ));

// function foo(a, b, c) {
//     return a + b + c;
// }

// const arrowFoo = (a, b, c) => {
// return a + b + c;
// }

// console.log(foo(1, 2, 3));
// console.log(arrowFoo(10, 20, 30));

// function foo(a, b, c) {
//     return a + b + c;
// }

// const arrowFoo = (a, b, c) => {
// return a + b + c;
// }

// console.log(foo(1, 2, 3));
// console.log(arrowFoo(10, 20, 30));

// function foo(a, b, c) {
//     console.log(arguments);

//     return a + b + c;
// }

// const arrowFoo = (...args) => {
//     return args;
// }

// console.log(foo(1, 2, 3));
// console.log(arrowFoo(10, 20, 30));

// const arrowLoo = () => {

// }

// const arrowFoo = a => {
//     return a;
// }

// console.log(arrowLoo());

// console.log(arrowFoo(10));

// const arrowFoo = (a, b) => a + b;

// console.log(arrowFoo(10, 20));

// const arrowFoo = (a, b) => ({
//     x: 5
// });

// console.log(arrowFoo(10, 20));

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }
// const person = "John";
// const context = {
//   person: "Alice",
// };
// greet.call(context, "Bob");


// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(square)
// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// function display(element) {
// console.log(element);

// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(capitalize)
// fruits.forEach(display);

// function capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function lowerCase(element, index, array) {
//   array[index] = element.toLowerCase();
// }

// function display(element) {
// console.log(element);
// }


// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   const sum = (item) => {
//     return totalPrice += item;
//   }

//   orderedItems.forEach(sum);

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   const addNumber = (number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   };

//   numbers.forEach(addNumber);

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// function changeEven(numbers, value) {

//   const newArray = [];

//   numbers.forEach(element => {
//        newArray.push(element % 2 === 0 ? element + value : element)
//   });

      
//   return newArray;
// };

// const array = [1, 2, 3, 4, 5];
// const doubledNumbers = changeEven(array, 2);

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

function showPureFunctionLoad() {
  
}




