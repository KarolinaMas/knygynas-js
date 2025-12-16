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
    const result = dataObj.reduce((sum, {price}) => sum + price, 0);

    return result.toFixed(2);
}

console.log(countBookSum(books));