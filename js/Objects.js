// const books = {
//   Green1: {
//     title: 'Looking for Alaska',
//     author: 'John Green',
//     year: 2013,
//     cover: 'paperback',
//     pages: 272,
//         price: 334,
//     fiction: true,
//   },
//   Green2: {
//     title: 'Abundance of Katherines',
//     author: 'John Green',
//     year: 2013,
//     cover: 'paperback',
//     pages: 272,
//       price: 337,
//     fiction: true,
//     },
//   platforms: ["Twitter", "Instagram", "Facebook"]
// };

// // console.log(books);

// books.Green1.year = 2005;
// console.log(books);

// books.Green1.language = "English";


// console.log(books.platforms);
// console.log(books.platforms[2]);
// console.log(books.platforms.length);
// console.log(books["platforms"]);


// console.log(books);

// let booklength = books.Green2.pages;
// console.log(booklength);
// let author = books.Green1.author;
// console.log(author);

// console.log(books.Green1);


let author = "John Green";
let title = "Looking for Alaska";
let pages = 272;
let fiction = true;
let year = 2005;


const book1 = {
    author,
    title,
    pages,
    fiction,
    year,
}


book1.title = "Abundance of Katherines";
book1.year = 2008;
console.log(book1);

