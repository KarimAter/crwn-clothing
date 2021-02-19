import React from "react";
import { connect, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "../cart-icon/cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
const CartIcon = ({ toggleCartHidden }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const itemCount = cartItems.length;

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
