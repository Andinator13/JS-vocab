'use strict'

// const message = 'Hello, world!'

// console.log(message.length);

// const title = 'Beauty and the Beast';

// const length = title.length;

// console.log(length);

// console.log(title[15]);

// const index = title.length - 1;

// console.log(title[index]);

// const companyName = 'Boston Dynamics';
// const repairBots = 150;
// const defenceBots = 50;

// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`

// console.log(message);

/** Перетворення типів: рядки */

// console.log(5);
// console.log(String(5));

// const str = String(5);

// console.log(str);

// console.log(typeof str);

// function cool (x) {
//     const value = 5;

//     return value
// }

// console.log(x);

/** Перетворення типів: number */

// console.log(Number("132"));

// console.log(5 + true + true);
// console.log("6" * 5);
// console.log(14 - "1");

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("25px"));
// console.log(typeof Number("25px"));
// console.log(Number(null));
// console.log(Number(undefined));

/** Оператори 
 * - порівняння
 * - рівності
 * - приведення типів операндів
 */

// console.log(13 > 7);
// console.log(13 > "7");
// console.log(13 > "7");
// console.log(13 >= "13");
// console.log(13 > 14);
// console.log(14 > 13);
// console.log(13 > 14);

// console.log("4" == 4);
// console.log("4" === 4);
// console.log("4" === "4");

// console.log(undefined == null);

/** 
 * Арифметичні функції
 * 
 * - Number.parseInt
 * - Number.paarseFloat
 * - Math
 */

// let width = "375px";

// width = Number(width);

// width = Number.parseInt(width);

// let height = "205.5px";

// height = Number.parseFloat(height);

// console.log(width);
// console.log(height);

// const age = prompt("А скільки вам рочків?");

// if (age >= 18) {
//     console.log("Все чудово! Можете дивитись порно :)");
    
// } else {
//     console.log("Опа, приїхали. СБУ вже слідкує за тобою! А ну виходь, малеча!!!");
// }

// let num = 13.1;

// num = 13.7

// // console.log(Math.floor(num));
// // console.log(Math.ceil(num));

// // const word = "floor";
// // console.log(word.length);
// console.log("floor".length);
// console.log("ceiling".length);

// let num = 14.3
// console.log(Math.round(num));

// num = 14.7
// console.log(Math.round(num));

/**
 * Функції
 * 
 * -Оголошення та виклик функції
 * -Параметри та аргументи
 * -Повернення значення
 */

// function add(x, y) {
//     const message = "Wazzuuup";
//     console.log(message);
//     console.log(5 + 3);
//     console.log(x + y);
    
// }

// add(1208, 1541);

// function add(x, y) {

//     return x + y;
// }

// // add(13, 21);

// // console.log(add(13, 21));

// const a1 = add(131, 25);

// console.log(a1);


// function sayHi(name) {
//     const message = `Hello ${name}!`;
//     return message;
// }

// document.body.textContent = sayHi("Alice")

// function alert(args) {
//   console.log(`%c${args}`, "color: yellow;");
// }

// alert()

// function alert(args) {
//     console.log(`%c${args}`, "color: red; font-size: 16px;");
//     new Audio("https://www.myinstants.com/media/sounds/vine-boom.mp3").play();
// }
  
// alert()

// const str = "Howdy";

// console.log(str);

// function greeting() {
//     console.log(str);
// }

// greeting();

// function calcBMI(weight, height) {

    
//     return `${Math.round(weight / (Math.sqrt(height)))}%`
    
// }

// function calcBMI(weight, height) {
    
//     return `${(Number.parseFloat(weight.replace(",", ".")) / Number.parseFloat(height.replace(",", ".") ** 2)).toFixed(1)}%`
// }

// console.log(calcBMI("95", "1,8"));


// let num = 13.29;

// console.log(Number(parseFloat(num).toFixed(1)));

// 

