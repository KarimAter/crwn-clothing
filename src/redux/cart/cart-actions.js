import { CartActionTypes } from "./cart-types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOOGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

// export const removeItemFromCart = (item) => ({
//   type: CartActionTypes.REMOVE_ITEM_FROM_CART,
//   payload: item,
// });

export const removeItemFromCart = (item, quantity) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: { cartItem: item, quantity: quantity },
});
