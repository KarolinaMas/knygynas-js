import books from "./data.js";

function getBookName(dataObj) {
  const result = dataObj.map((book) => book.title)
  .join(", ");

  return result;
}


// console.log(getBookName(books));

function getObjLength(dataObj) {
    return dataObj.length;
}

console.log(getObjLength(books));