import React from "react";
import { Link } from "react-router-dom";
import {useCart} from "../hooks/useCart";
import "./CartIcon.css";

const CartIcon = () => {
  const { cart } = useCart();
  
  return (
    <Link to="/cart" className="cart-icon-container">
      🛒
      {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
    </Link>
  );
};

export default CartIcon