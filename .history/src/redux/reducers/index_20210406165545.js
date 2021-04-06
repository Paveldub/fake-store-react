import { combineReducer } from 'redux';
import { productReducer } from './productReducer';

export const reducers = combineReducer({
  allProducts: productReducer,
});

