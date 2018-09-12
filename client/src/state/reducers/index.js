import {combineReducers} from 'redux';
import productsReducer from './products';
import addProductReducer from './addproduct';
import errorReducer from './error';
export default combineReducers({
  productsReducer,
  addProductReducer,
  errorReducer
});
