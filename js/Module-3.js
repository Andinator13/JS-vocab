// /** 3.1 Масив */

// // const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
// // const numbers = [1, 2, 3, 4, 5]; // масив чисел

// // console.log(planets[0]); // 'Earth'
// // console.log(planets[1]); // 'Mars'
// // console.log(planets[2]); // 'Venus'

// const mixed = ['apple', 10, true]; // масив з елементами різних типів

// // const planets = ['Earth', 'Mars', 'Venus'];
// // const firstElement = planets[0];
// // console.log(firstElement); // 'Earth'

// /** Перевизначення значення елемента */

// // const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// // planets[0] = 'Jupiter';
// // planets[2] = 'Neptune';
// // console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// // /** Довжина масиву */

// // const planets = ['Earth', 'Mars', 'Venus'];
// // console.log(planets.length); // 3

// const planets = ['Earth', 'Mars', 'Venus'];

// if(planets.length >= 3) {
// 	console.log("3 or more elements");
// } else {
// 	console.log("3 or less elements");
// }

// /** Індекс останнього елемента */

// const planets1 = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// const lastElementIndex = planets1.length - 1;

// console.log(planets1[lastElementIndex]); // "Venus"

// /** Присвоєння за посиланням і за значенням */

// let a = 5;

// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// a = 10;
// console.log(a); // 10
// console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія

// const c = ["Mango", "Poly"];
// const d = c;
// console.log(c); // ["Mango", "Poly"]
// console.log(d); // ["Mango", "Poly"]

// //Змінимо масив, замінивши елемент з індексом 1, використовуючи посилання з a.

// c[1] = "Jacob";
// console.log(c); // ["Mango", "Jacob"]
// console.log(d); // ["Mango", "Jacob"]

// d[0] = "Ajax";
// console.log(c); // ["Ajax", "Jacob"]
// console.log(d); // ["Ajax", "Jacob"]

// //Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи.

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2); // false
// console.log([] === []); // false

// /** Приведення типів: масиви */

// //Масив → Рядок

// const array = [1, true, "Poly"];
// console.log(String(array));// "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"

// //Масив → Число

// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN

// //Масив → Логічне значення (буль)

// //При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if(emptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// if(nonEmptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }


// /** 3.2 Методи масиву */

// // Метод join()

// // const words = ["JavaScript", "is", "amazing"];
// // console.log(words.join("")); // 'JavaScriptisamazing'
// // console.log(words.join(" ")); // 'JavaScript is amazing'
// // console.log(words.join("-")); // 'JavaScript-is-amazing'

// function transformString(string) {
// 	const words = string.split("_");
// 	return words.join("-");
// }

// console.log(transformString("user_age")); // "user-age"
// console.log(transformString("price_per_droid")); // "price-per-droid"

// //Метод split()

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]


// /** Метод slice() */

// const planets2 = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets2.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets2.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets2.slice(1, 3)); // ['Mars', 'Venus']

// // Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів (тобто стільки елементів з кінця, скільки вказано в параметрі begin):

// const planets3 = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets3.slice(-2)); // ["Jupiter", "Saturn"]

// /** Метод concat() */

// // const firstArray = ["Mercury", "Venus"];
// // const secondArray = ["Mars", "Jupiter"];
// // const result = firstArray.concat(secondArray);

// // console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

// //Порядок аргументів методу визначає порядок розташування елементів у новому масиві.

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Neptune"];

// console.log(firstArray.concat(secondArray, thirdArray));
// // ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

// console.log(firstArray.concat(thirdArray, secondArray));
// // ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];

// /** Метод indexOf() */

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// /** Метод push() */

// const planets4 = ["Earth", "Mars", "Venus"];

// planets4.push("Jupiter");
// console.log(planets4); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets4.push("Saturn", "Neptune");
// console.log(planets4); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]



// const tags = [];

// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

// /** Ітерація по масиву */

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }


/**
 * Функції (частина 2)
 */

// Псевдомасив arguments

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// Параметри за замовчуванням

// function greet(username = "Guest") {
//   console.log(`Hello, ${username}!`);
// }

// greet("Jacob"); // "Hello, Jacob!"
// greet();        // "Hello, Guest!"


// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//   // ...
//   }
// }

// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"


// Функціональний вираз (function expression)

// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };


// Область видимості

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i+=1) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// Стек викликів

// function fnA() {
//   console.log("Log inside fnA function before calling fnB");
//   fnB();
//   console.log("Log inside fnA function after fnB call");
// }

// function fnB() {
//   console.log("Log inside fnB function");
// }

// console.log("Log before calling fnA");
// fnA();
// console.log("Log after calling fnA");

// // "Log before calling fnA"
// // "Log inside fnA function before calling fnB"
// // "Log inside fnB function"
// // "Log inside fnA function after fnB call"
// // "Log after calling fnA"


// Stack frame (кадр стека, запис стека)

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo();


