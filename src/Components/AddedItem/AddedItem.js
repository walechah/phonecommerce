import React from "react";
import { useNavigate } from "react-router-dom";
import './AddedItem.css';

function AddedItem({ AddedItemImg, AddedItemName, AddedItemPrice, handleClosePopup }) {
  const navigate = useNavigate();

  const handleOkayClick = () => {
    handleClosePopup();
    navigate("/mycart");
  };

  const handleContinueShoppingClick = () => {
    handleClosePopup();
    navigate("/products");
  };

  return (
    <div className="AI">
      <div className="first">
        <h1>Item has been added to Cart</h1>
      </div>
      <div className="second">
        <img src={AddedItemImg} alt={AddedItemName} style={{ width: "100px", height: "100px" }} />
        <h3>{AddedItemName}</h3>
        <p>Price: ${AddedItemPrice}</p>
      </div>
      <div className="buttons">
        <button className="close-button" onClick={handleOkayClick}>
          Go to Cart
        </button>
        <button className="continue-button" onClick={handleContinueShoppingClick}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default AddedItem;
