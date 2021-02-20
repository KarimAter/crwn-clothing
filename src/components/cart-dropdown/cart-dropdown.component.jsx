import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button";
import { withRouter } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem}></CartItem>
          ))
        ) : (
          <span className="empty-message"> Your cart is empty </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
