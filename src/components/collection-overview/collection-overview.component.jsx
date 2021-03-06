import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";
const CollectionOverview = () => {
  const collections = useSelector((state) => state.shop.collections);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        ></CollectionPreview>
      ))}
    </div>
  );
};

export default CollectionOverview;
