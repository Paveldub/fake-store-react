import { ActionTypes } from '../constants/action-types';

export const RemoveSelectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

     
    default:
      return state;
  }
};
