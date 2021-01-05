const { findAccountById } = require("./accounts");

const findAuthorById = (authors, id) => authors.find((author) => author.id === id);

const findBookById = (books, id) => books.find((book) => book.id === id);

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  let inLibrary = books.filter((book) => book.borrows[0].returned === true);
  let notInLibrary = books.filter((book) => book.borrows[0].returned === false);
    result.push(notInLibrary);
    result.push(inLibrary);
    return result;
}


const getBorrowersForBook = (book, accounts) => {
  let result = book.borrows.map((borrowed) => {
    let foundAccount = findAccountById(accounts, borrowed.id);
    foundAccount.returned = borrowed.returned;
    return foundAccount;
  });
  return result.slice(0,10); 
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
