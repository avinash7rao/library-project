const findAccountById = (accounts, id) => accounts.find((account) => account.id === id); 

const sortAccountsByLastName = (accounts) => accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1
);

function numberOfBorrows(accounts, books) {
  let result = books.reduce((acc, book) => {
    for(let i = 0; i < book.borrows.length; i++) {
      if(book.borrows[i].id === accounts.id) {
        acc++;
      }}
      return acc
    }, 0)
    return result;
}


const getBooksPossessedByAccount = (account, books, authors) => {
  let result = [];
  books.forEach((book) => {
    if (book.borrows.some(borrow => borrow.id === account.id && 
        !borrow.returned)) {
          result.push({
            id : book.id, 
            title: book.title, 
            genre: book.genre, 
            authorId: book.authorId, 
            author: authors.find((author) => author.id === book.authorId),
            borrows: [...book.borrows]
          });
      }
  });
  return result;
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};

