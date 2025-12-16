import books from "./data.js";

function getBookName(dataObj) {
  const result = dataObj.map((book) => book.title)
  .join(", ");

  return result;
}


console.log(getBookName(books));