import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
      ></Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      ></Route>
    </div>
  );
};
export default ShopPage;

// export class ShopPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA,
//     };
//   }

//   render() {
//     return (
//       <div className="">
//         {this.state.collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps}>
//             {otherCollectionProps.title}
//           </CollectionPreview>
//         ))}
//       </div>
//     );
//   }
// }

// export default ShopPage;
