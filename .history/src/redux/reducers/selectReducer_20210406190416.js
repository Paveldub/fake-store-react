import { ActionTypes } from '../constants/action-types';

const initialState = {
  product: [],
};

export const selectProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};
