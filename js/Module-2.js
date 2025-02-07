/** Цикли
 *
 */

// let count = 0;

// while (count < 10) {

//     count += 2;

//     console.log(`Tell me why: ${count}`);
// }

// console.log(`Count: ${count}`);

/** Задача: Реєстрація у готелі */

// //Змінна clientCounter зберігає кількість зайнятих номерів на поточний момент.

// Змінна maxClients зберігає загальну кількість номерів у готелі.Завдяки циклу while місця в готелі будуть заповнюватися доти, доки поточна кількість клієнтів не дорівнюватиме максимально допустимій.

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// function countClients(clientCounter, maxClients) {
//   let counter = clientCounter; // створюємо локальну змінну

//   while (counter < maxClients) {
//     console.log(counter);
//     counter += 1;
//   }
// }

// countClients(18, 25);

/** Цикл do…while */

// let count = 0;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 5);

/** Цикл for */

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// for (let i = 20; i >= 0; i -= 5) {
//   console.log(i);
// }

// function sumUpTo(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(10)); // 55
// console.log(sumUpTo(0)); // 0


/** Інкремент і декремент */

// Префіксний інкремент

// let x = 5;
// const y = ++x;
// console.log(x); // 6
// console.log(y); // 6

// Постфіксний інкремент

// let x = 5;
// const y = x++;
// console.log(x); // 6
// console.log(y); // 5

// Префіксний декремент

// let x = 5;
// const y = --x;
// console.log(x); // 4
// console.log(y); // 4

// Постфіксний декремент

// let x = 5;
// const y = x--;
// console.log(x); // 4
// console.log(y); // 5

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

/** Оператор break */