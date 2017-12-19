import {combineReducers} from 'redux';
import BooksReducer from './reducersBooks' 
import ActionBook from './reducerActiveBook'

const rootReducer = combineReducers({
    books : BooksReducer,
    activeBook : ActionBook
});

export default rootReducer;