import React from "react";
import "../../components/menu-item/menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ id, imageUrl, title, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);
