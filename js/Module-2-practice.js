'use strict'

/** Цикли
 * 
 */

// let count = 0;

// while (count <= 5) {
  
//     count += 1;
    
//     console.log(`Count: ${count}`);
// }

// console.log(`Count: ${count}`);


// let clientCounter = 1;

// const maxClients = 50;

// while (clientCounter < maxClients) {
//     clientCounter += 1;

//     console.log(clientCounter);
// }

// function countClients(clientCounter, maxClients) {
// //   let counter = clientCounter; // створюємо локальну змінну

//   while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
//   }
// }

// countClients(18, 25);


// let count = 0;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count <= 5);

// console.log(`Count: ${count}`);

// let count = 0;

// do {
// 	    count += 1;
//         console.log(`Count: ${count}`);
// } while (count <= 5);

// console.log(`Count: ${count}`);

// let result;

// for (let i = 0; i <= 20; i += 5) {
  
//     result = i;

//   console.log(i);
// }

// console.log(result);

// function calculateTotal(number) {

//     let sum = 0;

//     for (i = 1; i <= number; i += 1) {
//         sum += i;
//     }

//     return sum;

// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(0));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

//Використовуючи цикл for,  повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.


// function calculateEvenTotal(number) {

//     let sum = 0;
    
//     for (i = 1; i <= number; i++) {

//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
    
//     return sum
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));
// console.log(calculateEvenTotal());


// function add() {

// //     let sum = 0;

// //     for (let i = 0; i <= 10; i += 1) {

// //         sum += 1;

// //         // console.log(sum);
        

// //     }
    
// //     return sum
// // }

// // console.log(add());


// console.log("Mary had a little lamb!");

// const hours = 1;
// const minutes = 33;
// let time = '';

// // if (minutes === 0) {
// //     time = `${hours} г.`
    
// // } else {
// //     time = `${hours} г. ${minutes} хв.`
// // }

// minutes === 0 ? time = `${hours} г.` : time = `${hours} г. ${minutes} хв.`

// console.log(time);

// const daysLeft = 5;
// let deadline = '';

// if (daysLeft === 0) {
//     deadline = 'Today';
// } else if (daysLeft === 1) {
//     deadline = 'Tomorrow';
// } else if (daysLeft === 2) {
//     deadline = 'Overmorrow';
// } else if (daysLeft > 2) {
//     deadline = 'Date in the Future';
// }

// console.log(deadline);

/**
 * Логічні оператори
 * 
 * - Перетоврення типів: логічне
 * - &&
 * - ||
 * - !
 * 
 */

// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(''));


// console.log(Boolean(true));
// console.log(Boolean(3));
// console.log(Boolean(3.14));
// console.log(Boolean(-2));
// console.log(Boolean("false"));
// console.log(Boolean(" "));

// console.log("first" && "last");
// console.log(null && "last");
// console.log("first" && undefined);
// console.log(null && false);

// console.log("first" && "last");
// console.log("first" || "last");

// console.log(null && "last");
// console.log(null || "last");

// console.log("first" && undefined);
// console.log("first" || undefined);

// console.log(null && false);
// console.log(null || false);

// console.log(!true);
// console.log(!5);
// console.log(!null);


// const sub = "free";
// let canConnect;

// if (sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// const sub = "pro";
// let canConnect;

// canConnect = sub === "pro" || sub === "vip" ? true : false;

// console.log(canConnect);

// const sub = "vip";
// let canConnect = sub === "pro" || sub === "vip";

// console.log(canConnect);







