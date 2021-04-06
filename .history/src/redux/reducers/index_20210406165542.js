import { combineReducer } from 'redux';
import { productReducer } from './productReducer';

export const const reducers = combineReducer({
  allProducts: productReducer,
});

