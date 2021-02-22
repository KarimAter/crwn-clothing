export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, { cartItem, quantity }) => {
  const newQuanitity = cartItem.quantity - quantity;

  if (newQuanitity > 0) {
    cartItem = { ...cartItem, quantity: newQuanitity };
    return cartItems.map((item) =>
      item.name === cartItem.name ? cartItem : item
    );
  } else {
    console.log(cartItem.name);

    return cartItems.filter((item) => item.name !== cartItem.name);
  }
};
