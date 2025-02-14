'use strict'
// // // // //Створи масив рядків і звернись до його елементів


// // // // // const popStars = ["Taylor Swift", "Ariana Grande", "Sabrina Carpenter", "Chappell Roan"];

// // // // // console.log(popStars[3]);
// // // // // console.log(popStars[0]);
// // // // // console.log(popStars[2]);

// // // // // const girlStars = ["Taylor Swift", "Ariana Grande", "Sabrina Carpenter", "Chappell Roan"];

// // // // // const firstStar = girlStars[0];

// // // // // console.log(firstStar);



// // // // // const bestSellers = ["Jaws", "Dune", "The Shining", "Jurassic Park", "Sex and the City"];

// // // // // console.log(bestSellers[2]);
// // // // // console.log(bestSellers[4]);

// // // // // bestSellers[2] = "Christine";
// // // // // bestSellers[4] = "Trading up";

// // // // // console.log(bestSellers[2]);
// // // // // console.log(bestSellers[4]);

// // // // // console.log(bestSellers.length);

// // // // // if (bestSellers.length <= 5) {
// // // // //     console.log("Top 5 Bestsellers")
// // // // // } else {
// // // // //     console.log("Bestellers")
// // // // // }


// // // // // const peterBencheley = bestSellers[0];
// // // // // const frankHerbert = bestSellers[1];
// // // // // const stephenKingNovel = bestSellers[2];
// // // // // const michaelChrichton = bestSellers[3];
// // // // // const candiceBushnell = bestSellers[4];

// // // // // console.log(peterBencheley);
// // // // // console.log(frankHerbert);
// // // // // console.log(stephenKingNovel);
// // // // // console.log(michaelChrichton);
// // // // // console.log(candiceBushnell);

// // // // // const planets1 = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// // // // // const lastElementIndex = planets1.length - 1;
// // // // // const blueMarble = planets1[2];
// // // // // // const bigDaddy = planets1.length - 4;



// // // // // console.log(planets1[lastElementIndex]); // "Venus"
// // // // // console.log(planets1[0]);
// // // // // console.log(blueMarble);
// // // // // // console.log(planets1[bigDaddy]);

// // // // // function getLastElementMeta(array) {
  
// // // // //     const lastIndex = array.length - 1;
// // // // //     const lastElement = array[lastIndex];
    
// // // // //     return [lastIndex, lastElement];

// // // // // }

// // // // // console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// // // // // function getExtremeElements(array) {

// // // // //   const firstElement = array[0];
// // // // //   const lastIndex = array.length -1;
// // // // //   const lastElement = array[lastIndex];

// // // // //   return [firstElement, lastElement];
  
// // // // // }

// // // // // console.log(getExtremeElements([1, 2, 3, 4, 5]));
// // // // // console.log(getExtremeElements(["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]));
// // // // // console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// // // // // const bestSellers = ["Jaws", "Dune", "The Shining", "Jurassic Park", "Sex and the City"];

// // // // // console.log(bestSellers.join(", followed by "));

// // // // // function changeCase(string) {
// // // // //   const userNames = string.split("_");

// // // // //   return userNames.join("-");

// // // // // }

// // // // // console.log(changeCase("mike_stoklasa"));

// // // // // function getLength(array) {
 
// // // // //   return array.join("").length;
// // // // // }

// // // // // console.log(getLength(["Mango", "hurries", "to", "the", "train"]))
// // // // // console.log(getLength(["M", "a", "n", "g", "o"]))
// // // // // console.log(getLength(["top", "picks", "for", "you"]))

// // // // function calculateEngravingPrice(message, pricePerWord) {

// // // //   const spaceBetween = message.split(" ");
// // // //   const totalPrice = spaceBetween.length * pricePerWord

// // // //   return totalPrice
    
// // // // }

// // // // console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// // // // console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// // // // console.log(calculateEngravingPrice("Web-development is creative work", 40));
// // // // console.log(calculateEngravingPrice("Web-development is creative work", 20));

// // // function getSlice(array, value) {

// // //   const valueEnd = array.indexOf(value);

// // //   if(valueEnd === -1) {
// // //     return [];
// // //   } else {
// // //     return array.slice(0, valueEnd + 1);
// // //   }
  
// // // }

// // // console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// // // console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// // // console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// // // console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// // // console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));

// // function createArrayOfNumbers(min, max) {
  
// //   const array = [];

// //   for (let i = min; i <= max; i += 1) {
 
// //     array.push(i)

// //   }

// //   return array
 
// // }

// // console.log(createArrayOfNumbers(1, 3));
// // console.log(createArrayOfNumbers(14, 17));
// // console.log(createArrayOfNumbers(29, 34));
// // console.log(createArrayOfNumbers());

// // function fillArray(min, max) {
// //     const arr = [];
// //     for (let i = min; i <= max; i += 2) {
      
      
// //   }
  
// //   return arr
// // }

// // console.log(fillArray(2, 10));

// function calculateTotalPrice(order) {

//   let totalSum = 0;

//   for (let i = 0; i < order.length; i++) {
 
//     totalSum += order[i];

//   }

//   return totalSum;

// }

// // function calculateTotalPrice(order) {
// //     let total = 0; // Початкове значення суми

// //     for (let i = 0; i < order.length; i++) {
// //         total += order[i]; // Додаємо кожен елемент масиву до total
// //     }

// //     return total; // Повертаємо загальну суму
// // }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// calculateTotalPrice([412, 371, 94, 63, 176]);


// // Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.


// function getEvenNumbers(start, end) {

//   const array = [];

//   for (i = start; i <= end; i += 1) {

//     if (i % 2 === 0) {

//       array.push(i);

//     }
    

//   }

//   return array;

// }

// function getEvenNumbers(start, end) {
  
//   return array = []; for (i = start; i <= end; i += 1) {

//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }

// }

// console.log(getEvenNumbers(2, 5));
//  console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
//  console.log(getEvenNumbers(8, 8));
//  console.log(getEvenNumbers(7, 7));
 
 
 

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.

// повертала масив усіх парних чисел від start до end.   r

// Якщо жодного парного числа немає, то масив має бути пустим.

// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).Використовуй цикл for.



/**
 * Масиви
 * 
 * - Створення масивів
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 * - Перевизначення
 */

// const courses = []; // літерал масиву

// console.log(courses);

// const countries = ["India", "Pakistan", "Bangladesh", "Nepal"]; // індексована сутність

// console.log(countries);
// console.table(countries);


// const brands = ["Adidas", "Reebok", "Samsung", "Zara"];

// console.log(brands);

// brands[2] = "Balenciaga";

// console.log(brands);


// const message = "Duck!";

// console.log(message);

// message[0] = "F";

// console.log(message);


/**
 * Передача за посиланням і за значенням
 * 
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */

/**
 * Методи масиву
 * 
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

// const courses = ["HTML", "CSS", "JS", "React", "Postgres"];

// const str = courses.join(" ");

// console.log(str);

// const newArr = str.split(" ");

// console.log(newArr);

// const Arr = courses.slice(0, 2);

// const Arr = courses.slice(-2);

// console.log(Arr);

// const newArr = ["Data Analytics", "UX Designer"];

// const Arr = courses.concat(newArr, ["Product Designer", "Digital Marketing"]);

// console.log(Arr);

// const slice = Arr.slice(-4);
// const slice2 = Arr.slice(0, 5);
// console.log(slice);
// console.log(slice2);

// console.log(courses.indexOf("React"));

// const wow = courses.push("hehehe");

// // console.log(wow);

// const res = courses.pop();

// console.log(res);

/**
 * Ітерація по масиву
 * 
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for і for...of
 */


// const courses = ["HTML", "CSS", "JS", "React", "Postgres"];

// for (let i = 0; i < courses.length; i++) {
//   // console.log(i);
//   // console.log(courses[i]);
//   courses[i] += `-${i}`;
  
// }

// console.log(courses);

// for (const course of courses) {
//   console.log(course);
  
// }

// const courses = ["HTML", "CSS", "JS", "React", "Postgres"];

// console.log(courses.includes("HTML"));
// console.log(courses.includes("html"));


/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. 
 * Значення гарантовано розділені пробілом. 
 */

// const values = "8 10";

// const arr = values.split(" ");

// console.log(arr);

// const result = arr[0] * arr[1];
// console.log(result);

// const perim = (Number(arr[0]) + Number(arr[1])) * 2;
// const perim = (+arr[0] + +arr[1]) * 2;

// console.log(perim);


/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента в масиві виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.  * 
 */

// const fruits = ["Apple", "Grapes", "Peach", "Banana", "Lemon"];

// for (let i = 1; i < fruits.length; i++) {
//   console.log(`${i}: ${fruits[i]}`);
//   // console.log(fruits[i]);
  
  
// }

// for (let i = 0; i < fruits.length; i++) {
//   // console.log(i);
//   console.log(`${i + 1}: ${fruits[i]}`);
   
// }

/** 
 * Напиши скрипт, який підраховує суму всіх парних чисел у
 * масиві. 
 */


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let sum = 0;

// for (const number of numbers) {
//   if (!(number % 2)) {
//     sum += number;
//   }
// }

// console.log(sum);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів, 
 * розділених комами. Порядковий номер імен та телефонів у рядках вказують
 * на відповідність. Кількість імен та телефонів гарантовано однакова. 
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38001234567,38001112233,38005556677,380638868526";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// // console.log(namesArr);
// // console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
    
// }

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символом пробілу.
 * Скрипт повинен працювати для будь-якого рядка.  
 */

// const str = "     Welcome     to the     Future!   ";

// const strArr = str.trim().split(" ");
// // console.log(strArr);

// const sliceArr = strArr.slice(1, strArr.length - 1).join(" ").trim();
// console.log(sliceArr);


// const str = "Houston";

// const indexStr = str.indexOf("o");
// console.log(indexStr);

// const lenStr = str.length;
// console.log(lenStr);


/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання
 */

// const values = [2, 17, 94, 1, 23, 37];
// let min;

// for (let i = 0; i < values.length; i++) {
//     if (i === 0) {
//         min = values[i];
        
//     } else if (values[i] < min) {
//         min = values[i];
//     }
// }

// console.log(min);


// const num = "1991";

// const numLen = num.length;
// console.log(numLen);


// const planets = ["Earth", "Mars", "Venus"];

// // console.log(planets);

// const length = planets.length;
// // console.log(length);

// for (let i = 0; i < planets.length; i++) {
//     console.log(i);
    
// }

// const fruits = ["apples", "bananas", "oranges"];

/** Розгалуження if...else */

// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }

/** Тернарний оператор
 * - без додаткових змінних;
 */

// fruits.includes("banana") ?  console.log("The array has an element banana") : console.log("Array does not contain banana element");

/** з додатковими змінними */

// const msg1 = "The array has an element banana";
// const msg2 = "Array does not contain banana element";

// fruits.includes("banana") ?  console.log(msg1) : console.log(msg2);

// function checkStorage(storage, item) {
   

//     if (storage.includes(item.toLowerCase())) {
//        return `${item.toLowerCase()} is available to order!`;
        
//     } else {
//        return "Sorry! We are out of stock!";
        
//     }
    
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));


// function getCommonElements(array1, array2) {
//     const newArr = [];

//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             newArr.push(array1[i]);
//         }
        
//     }

//     return newArr;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// const values = [2, 5, 13, 21, 27, 6, 54, 1949];

// console.log(values);


// const results = values.splice(2, values.length -1);
// console.log(results);
// console.log(values);

// function createReversedArray() {

//     const args = Array.from(arguments);

//     return args.toReversed();

// }

// function createReversedArray() {

//     const reversedArr = [];

//     for (let i = arguments.length - 1; i >= 0; i--) {
//         reversedArr.push(arguments[i]);
//     }
// return reversedArr
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray(412, 371, 94, 63, 176));
// console.log(createReversedArray());




// function calculateTax(amount, taxRate = 0.2) {
//     return amount * taxRate;
//  }

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));
// console.log(calculateTax(100, 0.2));
// console.log(calculateTax(200, 0.2));
// console.log(calculateTax(100, 0.3));
// console.log(calculateTax(200, 0.3));
// console.log(calculateTax(100));
// console.log(calculateTax(200));

// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };

// multiply(1, 2, 3);






