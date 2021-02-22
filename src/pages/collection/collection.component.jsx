import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  const collections = useSelector((state) => state.shop.collections);

  const category = match.params.collectionId;
  const collectionId = category[0].toUpperCase() + category.slice(1);
  const collection = collections.find(
    (collection) => collection.title === collectionId
  );
  console.log(collection);
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
