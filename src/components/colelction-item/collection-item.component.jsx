import React from "react";
import "../colelction-item/collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart-actions";

const CollectionItem = ({ id, item }) => {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();

  return (
    <div key={id} className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <CustomButton onClick={() => dispatch(addItemToCart(item))} inverted>
        AddToCart
      </CustomButton>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
