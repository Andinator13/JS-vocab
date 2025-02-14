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


// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// console.log('Можна відкрити чат', canOpenChat);

/**
 * Методи рядків
 * - slice
 * - toLowerCase/toUpperCase
 * - includes
 * - startsWith/endsWith
 * - indexOf
 * - trim
 */

// const user = 'Alice Franko';

// // const str = user.slice(0, 5);

// // console.log(str);

// // const str = user.toLowerCase();

// // console.log(str);

// const str = user.includes();

// console.log(str);

// let link = 'https://my-site.com/about';

// const str = link.endsWith('/');

// console.log(str);

// if (!str) {
//     console.log(`${link}/`);
    
// } else {
//     console.log(link);
    
// }

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//     console.log(`${link}/`);
// }

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//     link += '/';
// }

// console.log(link);


// let link = 'https://my-site.ua.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//     link += '/';
// }

// console.log(link);


// let link = 'https://my-site.ua.com/about';

// link = !link.endsWith('/') && link.includes('my-site') ? link += '/' : link

// console.log(link);


// const keyWord = 'best prices';
// const taboo1 = 'too expensive';
// const taboo2 = 'stupid';

// const str1 = "We're selling top-notch laptops at the BEST PRICES in the market!";

// const str2 = "Omg, I've tried to purchase a laptop from this STUpid website and it was just waaay tooo expensiveee!";

// // console.log(str1.toLowerCase().includes(keyWord));
// // console.log(str1.includes(taboo1));
// // console.log(str1.includes(taboo2));

// console.log(str2.includes(taboo1));
// console.log(str2.toLowerCase().includes(taboo2));


/**
 * Цикли
 * 
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотній відлік від 0 до N
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// console.log('before');

// for (let i = 0; i < 3; i += 1) {
//     console.log(i);
    
// }

// console.log('after');

// const str1 = 'We're the best';

// const str2 = "We're the best";

// function carsAvgYear() {

// console.log(`The average car's year: ${carsAvgYear()}`);}

// const name = 'Thanos';

// const message = `We're all afraid of ${name}`;

// console.log(message);



// const str = "Hello";

// // console.log(str[2]);

// for (let i = 0; i < str.length; i+=1) {
// console.log(str[i]);
// }
 
// const str = "Hello";

// // console.log(str[2]);

// for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === "l") {
//         break;
//     }
// console.log(str[i]);
//  }

// ------------------- Інкремент

/** Префіксний інкремент */

// let a = 10;
// const b = ++a;

// console.log("a", a);
// console.log("b", b);

/** Постфіксний інкремент */

// let a = 10;
// const b = a++;

// console.log("a", a);
// console.log("b", b);

// ------------------- Декремент

/** Префіксний декремент */

// let a = 10;
// const b = --a;

// console.log("a", a);
// console.log("b", b);

/** Постфіксний декремент */

// let a = 10;
// const b = a--;

// console.log("a", a);
// console.log("b", b);


// -------------------- while

// console.log("before");

// let counter = 0;

// while (counter < 5) {
//     console.log(counter);
    
//     counter++;
// }

// console.log("after");

// ------------------- do while

// console.log("before");

// let counter = 0;

// do {
//     console.log(counter);
//     counter++

// } while (counter < 5);

// console.log("after");

/** 
 * Напиши цикл for, який виводить у консоль браузера 
 * числа за зростанням від a до b,
 * але тільки якщо число кратне 5.
*/

// const a = 20;
// const b = 100;

// for (let i = a; i < b; i++) {
//     if(!(i % 5)) {
//         console.log(i);
//     }
        
// }

// for (let i = b; i >= a; i--) {
//     if (!(i % 5)) {
//         console.log(i);
        
//     }
// }


/** 
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять у діапазон чисел у змінних від min до max. 
 * Наприклад, якщо min=0 і max=5, то діапазон 0-5, і в
 * ньому два парних числа - 2 і 4, їх сума 6. 
 */

// function getEvenNumbers(min, max) {
    
//     let sum = 0;

//     for (let i = min; i <= max; i++) {
//         if (!(i % 2)) {
//           sum += i;
//         // console.log(i);
        
//         }
             
//     }

//     return sum
    
// }

// console.log(getEvenNumbers(1, 11));

// const min = 0;
// const max = 13;

// let sum = 0;

// for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//         // console.log(i);
        
//     }
// }

// console.log(sum);


// const min = 0;
// const max = 6;

// let sum = 0;

// for (let i = min; i <= max; i++) {
//     if (i % 2) {
//         // console.log(i);
//         continue
//     }
//     // console.log(i);
    
//     sum += i;
// }

// console.log(sum);


// const start = 6;
// const end = 17;
// let number = 0;

// for (let i = start; i < end; i++) {
        
//     if (!(i % 5)) {
//         number = i;
//         break;
//     }

//    }

// console.log(number);

// function findNumber(start, end, divisor) {

//     let num = 0;

//         for (let i = start; i <= end; i++)

//         if (!(i % divisor)) {
//             num = i;
//             return num;
//         }

// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));
// console.log(findNumber());


function calculateTotalPrice(order) {
  
}

