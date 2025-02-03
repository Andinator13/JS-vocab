'use strict'; // Код у суворому режимі

// 1. Виведеня даних

// Метод console.log()

console.log('JavaScript is awesome!');
console.log(10);

// 2. Змінні та типи даних

// 2.1 Оголошення даних

const age = 20;
const username = 'Mango';

console.log(age);
console.log(username); // "Mango"

// 2.2 Перевизначення значення

let userName;
console.log(username); // undefined

userName = 'Poly';
console.log(userName);

userName = 'Frodo Baggins';
console.log(userName);

// 2.3 Типи даних

const salary = 3710.84; // Number (число)

console.log(salary);

const description = 'JavaScript is awesome!'; // String (рядок)

console.log(description);

const isModalOpen = true; // Boolean

console.log(isModalOpen);

// 2.4 Спеціальні значення null, undefined

let value = null;
console.log(value); // null

let value1;
console.log(value1); // undefined

// 2.5 Оператор typeof

typeof operand;

const quantity = 17;
console.log(typeof quantity); // виведе "number"

const message = 'JavaScript is awesome!';
console.log(typeof message); // виведе "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // виведе "boolean"

let username1;
console.log(typeof username); // виведе "undefined"

let status = null;
console.log(typeof status); // виведе "object"

// 2.6 Арифметичні операції

const a = 8;
const b = 5;
console.log(a + b); // 13 (addition)

const c = 8;
const d = 5;
console.log(c - d); // 3 (subtraction)

const e = 8;
const f = 5;
console.log(e * f); // 40 (multiplication)

const g = 8;
const h = 5;
console.log(g / h); // 1.6 (division)

const i = 8;
const j = 5;
console.log(i % j); // 3 Modulus (Division Remainder)

const k = 8;
const l = 5;
console.log(k ** l); // 32768 (Exponentiation (ES2016))

// 2.7 Комбіновані оператори

let myAge = 27;
myAge = myAge + 5;
console.log(myAge);

let hisAge = 42;
hisAge += 5;
console.log(hisAge);

// 3. Рядки

// 3.1 Конкатенація

const message1 = "This " + "is" + " the" + " way";
console.log(message1); // "Mango is happy"

const herAge = 28;
const message2 = "I'm " + herAge + " today!";
console.log(message2);

console.log("Mango" + 55); // "Mango55"
console.log("Mango" + true); // "Mangotrue"

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

const message3 = "Welcome, " + userName + "!";
console.log(message3);

