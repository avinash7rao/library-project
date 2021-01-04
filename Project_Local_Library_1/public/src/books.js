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

function getBorrowersForBook(book, accounts) {
  let result = [];
  for (let i = 0; i < book.borrows.length; i++) {
    for (let j = 0; j < accounts.length; j++) {
      if (book.borrows[i].id === accounts[j].id) {
       result.push({...book.borrows[i], ...accounts[j]});
      }
    }
  }
  return result.slice(0, 10);
}





module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
