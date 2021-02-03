import React from "react";
import CollectionItem from "../colelction-item/collection-item.component";
import "../preview-collection/preview-collection.component.styles.scss";

const CollectionPreview = ({ key, title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, indx) => indx < 4)
        .map((item) => (
          // <div> {item.name}</div>
          <CollectionItem {...item}></CollectionItem>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
