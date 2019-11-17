import ActionTypes from "../constants/ActionTypes";

export const addItem = payload => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload
  };
};

export const incrementQuantity = payload => ({
  type: ActionTypes.INCREMENT_QUANTITY,
  payload
});

export const decrementQuantity = payload => ({
  type: ActionTypes.DECREMENT_QUANTITY,
  payload
});
