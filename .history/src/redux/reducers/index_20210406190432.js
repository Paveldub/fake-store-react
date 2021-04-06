import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { selectProductReducer } from './selectReducer';

export const reducers = combineReducers({
  allProducts: productReducer,
});
