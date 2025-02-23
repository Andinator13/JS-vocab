/** Колбек-функції */

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// 															 // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// 																// "Dear Mango, your room will be ready in 30 minutes"

/** Стрілочні функції */

// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

const add = a => {
  return a + 5;
};

const greet = () => {
  console.log('Hello!');
};

// Явне повернення (explicit return)

const addEx = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

// Неявне повернення (implicit return)

const addImp = (a, b, c) => a + b + c;

// ﻿Псевдомасив arguments

// Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

const addArgs = (...args) => {
  console.log(args);
};

addArgs(1, 2, 3); // [1, 2, 3]

// Колбеки

// const numbers = [5, 10, 15, 20, 25];

// Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

// Стрілочну колбек-функцію також можна оголошувати окремо й передавати на неї посилання

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

/** Методи map і flatMap */

// Чисті функції

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers1 = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers1, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers1); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// Перебираючі методи

