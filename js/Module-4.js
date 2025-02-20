/** Об'єкти */

// Створення об'єктів

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// console.log(book);

// Вкладені властивості

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(user);


// Доступ до властивостей через крапку

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined


//Доступ до вкладених властивостей

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };

// const location1 = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3


// Доступ до властивостей через квадратні дужки

// objectName['key']

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book["title"]); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book["genres"]); // ["historical prose", "adventure"]

// const propKey = "author";
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"


// Зміна значення властивостей

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]


//Додавання властивостей

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

// Короткі властивості

// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.

// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25


// Обчислювальні властивості

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Henry Sibola";
// console.log(user.name); // "Henry Sibola"

// Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його.

// const propName = "name";
// const user = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };

// console.log(user.name); // "Henry Sibola"


/** Перебір об'єкта */

// Цикл for...in

// for (key in object) {
//   // інструкції
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }


// Метод Object.keys()

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// Метод Object.values()

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]


/** Масив об'єктів */

// Для опису групи сутностей використовується масив об'єктів.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   }
// ];

// Для перебору такого масиву використовується стандартний цикл for...of.

for (const book of books) {
  console.log(book); // Об'єкт книги
  console.log(book.title); // Назва
  console.log(book.author); // Автор
  console.log(book.rating); // Рейтинг
}

// Пошук об'єкта за значенням властивості

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }

// Колекція значень властивості

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// Дізнаємося середній рейтинг усієї нашої колекції. Для цього треба скласти всі рейтинги й розділити отримане значення на кількість книг.

const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
];

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = totalRating / books.length;
console.log(averageRating); // 8




/** Синтаксис spread і rest */

//  Це спеціальний синтаксис, який дозволяє зібрати групу незалежних елементів у масив.

function multiply(...args) {
  console.log(args);
}

multiply(1, 2); // [1, 2]
multiply(1, 2, 3); // [1, 2, 3]
multiply(1, 2, 3, 4); // [1, 2, 3, 4]
