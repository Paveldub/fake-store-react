import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { selectedProductReducer } from './selectReducer';
import { RemoveSelectedProductReducer } from './removeSelertedProductReducer';

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  removeSelectedProduct: RemoveSelectedProductReducer,
});
