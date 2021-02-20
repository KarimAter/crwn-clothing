import React from "react";
import "..//header/header.styles.scss";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
  const hookUser = useSelector(
    ({ user: { currentUser }, cart }) => currentUser
  );
  const hookHidden = useSelector((state) => state.cart.hidden);

  console.log("Header being rendered");

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {hookUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            {" "}
            Sign In
          </Link>
        )}
        <CartIcon></CartIcon>
      </div>
      {hookHidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;

// import React from "react";
// import "..//header/header.styles.scss";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// import { ReactComponent as Logo } from "../../assets/crown.svg";
// import { auth } from "../../firebase/firebase.utils";
// import CartIcon from "../cart-icon/cart-icon.component";
// import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// const Header = ({ currentUser, hidden }) => (
//   <div className="header">
//     <Link className="logo-container" to="/">
//       <Logo className="logo"></Logo>
//     </Link>
//     <div className="options">
//       <Link className="option" to="/shop">
//         SHOP
//       </Link>
//       <Link className="option" to="/contact">
//         CONTACT
//       </Link>
//       {currentUser ? (
//         <div className="option" onClick={() => auth.signOut()}>
//           Sign Out
//         </div>
//       ) : (
//         <Link className="option" to="/signin">
//           {" "}
//           Sign In
//         </Link>
//       )}
//       <CartIcon></CartIcon>
//     </div>
//     {hidden ? null : <CartDropdown />}
//   </div>
// );

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });
// export default connect(mapStateToProps)(Header);
