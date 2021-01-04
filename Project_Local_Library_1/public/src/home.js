const totalBooksCount = (books) => books.reduce(accumulator => accumulator + 1, 0);

const totalAccountsCount = (accounts) => accounts.reduce(acc => acc + 1, 0);

const booksBorrowedCount = (books) => books.reduce((acc, book) => {
  if(!book.borrows[0].returned) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0 );

const getMostCommonGenres = (books) => { 
  let genres = [];
  books.forEach((book) => {
    genres.forEach((genre) => {
      if(genre.name === book.genre) {
        genre.count ++;
      } 
    }); 
    if(genres.find(genre => genre.name === book.genre) === undefined){
      genres.push({
        name: book.genre,
        count: 1
      })
    }
  });
 return genres.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1).splice(0,5);
}
  
function getMostPopularBooks(books) {
  let popularBooks = [];
  books.forEach((book) => {
    popularBooks.push({
      name : book.title,
      count : book.borrows.length,
    })
  })
  return popularBooks.sort((bookA, bookB) => bookA.count < bookB.count ? 1: -1).splice(0,5);
  
}

function getMostPopularAuthors(books, authors)  {
  let popularAuthor = [];
  books.forEach(book => {
    authors.forEach((author) => {
      if(book.authorId === author.id) {
        popularAuthor.push({
          name : author.name.first + " " + author.name.last,
          count : book.borrows.length,
        })
      }
    }
  )});
  return popularAuthor.sort((authorA, authorB) => authorA.count < authorB.count ? 1: -1).splice(0,5)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
