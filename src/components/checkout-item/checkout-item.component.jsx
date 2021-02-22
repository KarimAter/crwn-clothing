import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
} from "../../redux/cart/cart-actions";
import "..//checkout-item/checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { id, name, imageUrl, price, quantity } = item;
  const dispatch = useDispatch();
  return (
    <div key={id} className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="name"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeItemFromCart(item, 1))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItemToCart(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItemFromCart(item, quantity))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
