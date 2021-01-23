import React from "react";
import "../../components/menu-item/menu-item.styles.scss";

const MenuItem = ({ id, imageUrl, title, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title" key={id}>
        {title.toUpperCase()}
      </h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
