
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

function getEvenNumbers(start, end) {
  
  return array = []; for (i = start; i <= end; i += 1) {

    if (i % 2 === 0) {
      array.push(i);
    }
  }

}

console.log(getEvenNumbers(2, 5));
 console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
 console.log(getEvenNumbers(8, 8));
 console.log(getEvenNumbers(7, 7));
 
 
 

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. 

// повертала масив усіх парних чисел від start до end.   r

// Якщо жодного парного числа немає, то масив має бути пустим.

// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).Використовуй цикл for.