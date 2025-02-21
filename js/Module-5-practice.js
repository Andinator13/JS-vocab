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

function greet(name) {
  console.log(`Hello, ${name}! I am ${this.person}`);
}
const person = "John";
const context = {
  person: "Alice",
};
greet.call(context, "Bob");
