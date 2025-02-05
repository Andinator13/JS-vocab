/** Масив */

// const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
// const numbers = [1, 2, 3, 4, 5]; // масив чисел

// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'

const mixed = ['apple', 10, true]; // масив з елементами різних типів

// const planets = ['Earth', 'Mars', 'Venus'];
// const firstElement = planets[0];
// console.log(firstElement); // 'Earth'

/** Перевизначення значення елемента */

// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// /** Довжина масиву */

// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets.length); // 3

const planets = ['Earth', 'Mars', 'Venus'];

if(planets.length >= 3) {
	console.log("3 or more elements");
} else {
	console.log("3 or less elements");
}

/** Індекс останнього елемента */

const planets1 = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const lastElementIndex = planets1.length - 1;
const blueMarble = planets1[2];
const bigDaddy = planets1.length - 4;

console.log(planets1[lastElementIndex]); // "Venus"
console.log(planets1[0]);
console.log(blueMarble);
console.log(planets1[bigDaddy]);