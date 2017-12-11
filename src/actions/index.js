
export function selectBook(book){
  // console.log('a book has been selected', book.title);
  // select book is an action creator, it needs to retunr and action - an action with a type property often a payload
  return {
    type : 'BOOK_SELECTED',
    payload : book
  };
}
