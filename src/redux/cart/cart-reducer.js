import { CartActionTypes } from "./cart-types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN: {
      return { ...state, hidden: !state.hidden };
    }
    case CartActionTypes.ADD_ITEM: {
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    }

    case CartActionTypes.REMOVE_ITEM: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
