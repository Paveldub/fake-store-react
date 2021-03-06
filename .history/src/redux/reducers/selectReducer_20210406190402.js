import { ActionTypes } from '../constants/action-types';

const initialState = {
  product: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
