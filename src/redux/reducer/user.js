import findIndex from "lodash/findIndex";
import ActionTypes from "../constants/ActionTypes";

const initialState = {
  cartItems: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
      };

    case ActionTypes.INCREMENT_QUANTITY:
      const oldCartItems = state.cartItems;
      const itemIndex = findIndex(oldCartItems, {
        itemname: action.payload.itemname,
        price: action.payload.price
      });
      oldCartItems[itemIndex].quantity++;
      return {
        ...state,
        cartItems: [...oldCartItems]
      };
    case ActionTypes.DECREMENT_QUANTITY:
      const cartItems = state.cartItems;
      const index = findIndex(cartItems, {
        itemname: action.payload.itemname,
        price: action.payload.price
      });
      if (index === -1) {
      } else if (cartItems[index].quantity === 1) {
        cartItems[index].quantity--;
        cartItems.splice(index, 1);
      } else {
        cartItems[index].quantity--;
      }
      return {
        ...state,
        cartItems: [...cartItems]
      };
    default:
      return state;
  }
};

export default userReducer;
