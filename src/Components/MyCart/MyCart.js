import React from "react";
import CartCards from "./CartCards";
import "./MyCart.css";

const MyCart = ({ itemArray, handleRemoveFromCart }) => {
  return (
    <div className="cart-container">
      {itemArray.length === 0 ? (
        <h1 className="cart-empty">Cart is Empty</h1>
      ) : (
        <CartCards itemArray={itemArray} handleRemoveFromCart={handleRemoveFromCart} />
      )}
    </div>
  );
};

export default MyCart;
