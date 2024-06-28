import React from "react";
import { storeProducts } from "../../data";
import "./Cards.css";

function Cards({ handleAddToCart, setItemArray, itemArray }) {
  return (
    <div className="cards-container">
      {storeProducts.map((product) => (
        <div key={product.id} className="card">
          <div className="photo">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="content">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => {
                handleAddToCart(product.img, product.title, product.price);
                setItemArray([...itemArray, product.id]); // Update itemArray state
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
