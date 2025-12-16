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

console.log(addBook(books, "Knyga #6", 2.75));


