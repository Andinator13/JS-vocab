/** 3.1 Масив */

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

console.log(planets1[lastElementIndex]); // "Venus"

/** Присвоєння за посиланням і за значенням */

let a = 5;

let b = a;
console.log(a); // 5
console.log(b); // 5

a = 10;
console.log(a); // 10
console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія

const c = ["Mango", "Poly"];
const d = c;
console.log(c); // ["Mango", "Poly"]
console.log(d); // ["Mango", "Poly"]

//Змінимо масив, замінивши елемент з індексом 1, використовуючи посилання з a.

c[1] = "Jacob";
console.log(c); // ["Mango", "Jacob"]
console.log(d); // ["Mango", "Jacob"]

d[0] = "Ajax";
console.log(c); // ["Ajax", "Jacob"]
console.log(d); // ["Ajax", "Jacob"]

//Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи.

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false
console.log([] === []); // false

/** Приведення типів: масиви */

//Масив → Рядок

const array = [1, true, "Poly"];
console.log(String(array));// "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"

//Масив → Число

console.log(Number([])); // 0
console.log(Number([1])); // 1
console.log(Number([1, 2, 3])); // NaN

//Масив → Логічне значення (буль)

//При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

if(emptyArray) {
	console.log("if is in progress")
} else {
	console.log("else is not performed")
}

if(nonEmptyArray) {
	console.log("if is in progress")
} else {
	console.log("else is not performed")
}


/** 3.2 Методи масиву */