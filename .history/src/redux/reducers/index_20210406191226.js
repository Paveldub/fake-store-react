import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { selectedProductReducer } from './selectReducer';

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
