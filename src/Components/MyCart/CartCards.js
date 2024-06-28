import React, { useState } from "react";
import { storeProducts } from "../../data";
import "./MyCart.css";

function CartCards({ itemArray, handleRemoveFromCart }) {
  const [qt, setqt] = useState(1);

  return (
    <div>
      {storeProducts
        .filter((product) => itemArray.includes(product.id))
        .map((product) => (
          <div key={product.id} className="cart-card">
            <div className="items">
              <img src={product.img} alt={product.title} />
              <div>
                <h2>{product.title}</h2>
                <p>{product.company}</p>
                <p>${product.price}</p>
                <p>{product.text}</p>
                Quantity:
                <input
                  type="number"
                  value={qt}
                  onChange={(e) => setqt(parseInt(e.target.value))}
                />
              </div>
            </div>
            <button onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
          </div>
        ))}
    </div>
  );
}

export default CartCards;
