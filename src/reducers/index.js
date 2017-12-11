import { combineReducers } from 'redux';

// here is where we import our books reducer this reducer adds a key to our global applications st
import BooksReducer from './reducer_books';

import ActiveBook from './reducer_active_book';



const rootReducer = combineReducers({
  //this reducer adds a key to our global applications state called books where the value is what ever is returned in books reducer
  books: BooksReducer,
  activeBook : ActiveBook
});



export default rootReducer;
