// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
// rating: 4,
// price: 2153,
// tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//   }
// };

// console.log(apartment);



// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);



// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = `${60} m2`;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// }

// // console.log(apartment.area);
// // console.log(apartment.rooms);
// // console.log(apartment.location);
// console.log(apartment);


// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//      name,
//   price,
//   image,
//   tags,
// };


// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {};


// function add(...args) {
//     const sum = 0;

//     for (a of args) {
//         sum += a;
//     }

//     return sum;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// ;
// console.log(add(32, 6, 13, 19, 8));


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];

// for (const key in apartment) {
//   console.log(key); // Ключ
//   console.log(apartment[key]);  // Значення властивості з таким ключем
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = ["Spacious apartment in the city center", 4, 2153];
// const keys = Object.keys(apartment);

// console.log(keys);


// for (const key of keys) {
//     console.log(key); // Ключ
//     console.log(apartment[key]); // Значення властивості
// }

// function countProps(object) {
//   let propCount = 0;

     
//   for (const key of Object.keys(object)) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// console.log(countProps({}));

// console.log(countProps({ name: "Mango", age: 2 }));

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// function countTotalSalary(salaries) {
//     let totalSalary = 0;
    
//      for (sum of Object.values(salaries)) {
//          totalSalary += sum;
//   }
    
//     return totalSalary
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));



// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = ["#f44336", "#2196f3","#4caf50", "#ffeb3b"];
// const rgbColors = ["244,67,54", "33,150,243", "76,175,80", "255,235,59"];

// for (color of colors) {

// }

// console.log(hexColors);


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     for (const product of products) {
// 	if(product.name === productName) {
//         return product.price;
//     }
//     }
//     return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));


// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   }
// }

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };


// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     arr.push(i)
//   }
//   return arr;
// }

// console.log(fillArray(2, 10));

// const album = {
//   title: "Mayhem",
//   artist: "Lady Gaga",
//   tracks: ["Disease", "Abracabra", "Garden of Eden", "Perfect Celebrity", "Vanish into You", "Killah", "Zombieboy", "LoveDrug", "How Bad Do U Wnt Me", "Don't Call Tonight", "Shadow of a Man", "The Beast", "Blade of Grass", "Do with a Smile"
//   ],
//   date: "7.3.2025"
// }

// album.artist = "Stefani Germanotta";
// album.tracks.push("Can't Stop the High")

// console.log(album);



// const bestTrack = album.tracks[1];

// const bestArtist = "Lady Gaga"

// console.log(album["title"]);
// console.log(album.artist);
// console.log(bestTrack);
// console.log(album[bestArtist]);


// const obj = {
//   name: "Alice",
//   age: 25,
//   skills: {
//     html: true,
//     css: true,
//     js: false
//   }
// }

// const newObj = obj.skills

// console.log(newObj.html);

// const title = "Mayhem";
// const artist = "Lady Gaga";
// const tracks = ["Disease", "Abracabra", "Garden of Eden", "Perfect Celebrity", "Vanish into You", "Killah", "Zombieboy", "LoveDrug", "How Bad Do U Wnt Me", "Don't Call Tonight", "Shadow of a Man", "The Beast", "Blade of Grass", "Do with a Smile"
// ];
// const date = "3.7.25";

// const newAlbum = {
//   title,
//   artist,
//   tracks,
//   date
// }

// console.log(newAlbum);

// const keyName1 = "artist";
// const keyName2 = "title";

// const newAlbum = {
//   [keyName2]: "Mayhem",
//   [keyName1]: "Lady Gaga",
//   tracks,
//   date
// }

// console.log(newAlbum);


// function makeObject(key, value) {
//   return {
//     [key]: value
//   }
// }

// console.log(makeObject("title", "Mayhem"));

// const input = prompt("age");

// const obj = {
//   age: input
// }

// console.log(obj);


// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3
// }

// const keys = Object.keys(feedback)
// const values = Object.values(feedback)

// console.log(keys);
// console.log(values);

// let total = 0;

// for (const value of values) {
//   total += value
// }

// console.log(total);

// const user = {
//   name: "Alice",
//   age: 20,
//   hobby: "html",
//   premium: true
// }

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// console.log(user);

// const keys = Object.keys(user)

// console.log(keys);

// for (const key of keys) {
//  console.log(`${key}: ${user[key]}`);
//  }


// const salaries = {
//   John: 500,
//   Paul: 500,
//   George: 400,
//   Ringo: 400
// }

// const values = Object.values(salaries);
// console.log(values);

// let sum = 0;

// for (const value of values) {
//   console.log(value);
//   sum += value
// }

// console.log(sum);

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// let total = 0;

// for (const book of books) {
//   total += book.rating
// }

// const averageRating = total / books.length;

// console.log(titles);
// console.log(total);
// console.log(averageRating);



// let total = 0;

// for (key in feedback) {
//   // console.log(key);
//   total += feedback[key]
// }

// console.log(total);

// const keys = Object.keys(feedback);

// console.log(keys);

// let total = 0;

// for (const key of keys) {
//   // console.log(key);
//   total += feedback[key]
// }

// console.log(total);


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const keyValues = [];

//   for (const product of products) {
//     if (propName in product) {
//       keyValues.push(product[propName])
//     }
//   }
  
//   return keyValues
// }

// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  
  for (const product of products) {
    if (productName == product.name) {
      return product.price * product.quantity
    } 
         
  }

  return `Product ${productName} not found!`
}


console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Scanner"));
console.log(calculateTotalPrice("Printer"));






