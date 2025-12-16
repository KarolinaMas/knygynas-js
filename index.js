import books from "./data.js";

function getBookName(dataObj) {
  const result = dataObj.map((book) => book.title).join(", ");

  return result;
}

// console.log(getBookName(books));

function getObjLength(dataObj) {
  return dataObj.length;
}

// console.log(getObjLength(books));

function addBook(dataObj, bookTitle, bookPrice) {
  dataObj.push({ title: bookTitle, price: bookPrice });

  return dataObj;
}

// console.log(addBook(books, "Knyga #6", 2.75));

function getLastBook(dataObj) {
  return dataObj[dataObj.length - 1];
}

// console.log(getLastBook(books));

function countBookSum(dataObj) {
  const result = dataObj.reduce((sum, { price }) => sum + price, 0);

  return result.toFixed(2);
}

// console.log(countBookSum(books));

function countDiscount(dataObj) {
  const expensiveBooks = dataObj.filter(({ price }) => price > 10);

  const booksWithDiscount = expensiveBooks
    .map(({ price, title }) => ({bookTitle: title, oldPrice: price, newPrice: (price * 0.75).toFixed(2)}))

  const result = booksWithDiscount.map(({bookTitle, oldPrice, newPrice}) => `Knyga: ${bookTitle} Sena kaina: ${oldPrice} Pardavimo kaina: ${newPrice} Pritaikyta nuolaida -25%`).join("\n");
  
  
  return `!!! Nukainuota !!! \n${result}`;
}

// console.log(countDiscount(books));

function sortByPrice(dataObj) {
    return dataObj.sort((a, b) => a.price - b.price);
}

console.log(sortByPrice(books));
