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

const isModalOpen = false; // Boolean

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

// 3.2 Перетворення типів: рядки

// 3.2.1 Явне перетворення типів

console.log(String(5)); // "5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

// 3.2.2 Неявне перетворення типів

console.log("5" + 3); // "53"
console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"

// 3.3 Шаблонні рядки

const guestName = "Stacy";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`; // Інтерполяція
console.log(greeting); // "Welcome Mango, your room number is 207!"

// 3.4 Довжина рядка

const productName = "Repair droid";

// Якщо у змінній зберігається рядок
console.log(productName.length); // 12

// Якщо рядковий літерал
console.log("Repair droid".length); // 12

// 3.5 Індексація рядків

const product = "Repair droid";
console.log(product[0]); // 'R'
console.log(product[5]); // 'r'
console.log(product[11]); // 'd'

const girl = "Slut"
const lastElementIndex = girl.length - 1;
console.log(girl[lastElementIndex]); // 't'

console.log(girl[girl.length - 1]); // 't'


// 4.1 Оператори порівняння

const n = 2;
const o = 5;

console.log(n > o); // false
console.log(o > n); // true
console.log(n >= o); // false
console.log(o >= n); // true

console.log(n < o); // true
console.log(o < n); // false
console.log(n <= o); // true
console.log(o <= n); // false

// 4.2 Оператори несуворої рівності

console.log(5 == 5); // true
console.log(5 == 3); // false
console.log(5 != 3); // true
console.log(5 != 5); // false

// 4.3 Оператори суворої рівності

// Добре, приведення типів не виконується
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

// 4.4 Перетворення типів: числа

console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0

console.log(Number(undefined)); // NaN
console.log(Number("Jacob")); // NaN
console.log(Number("25px")); // NaN


//Арифметичні операції (+, -, *, /) виконують неявне перетворення типів.

console.log("5" * 2); // 10
console.log("10" - 5); // 5
console.log(5 + true); // 6
console.log(5 - true); // 4

//У разі використання операторів порівняння (<, >, <=, >=) також виконується неявне перетворення типів. 
console.log("10" > 5); // true
console.log(10 > "5"); // true
console.log(5 > true); // true
console.log(5 < true); // false
console.log("5" < true); // false

// 4.5 Перетворення рядків у числа

