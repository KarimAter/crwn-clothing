import React from "react";
import "..//checkout-item/checkout-item.styles.scss";

const CheckoutItem = ({ item: { id, name, imageUrl, price, quantity } }) => {
  return (
    <div key={id} className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="name"></img>
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">{quantity}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
