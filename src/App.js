import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Cards from "./Components/Cards/Cards";
import MyCart from "./Components/MyCart/MyCart";
import { useState } from "react";
import AddedItem from "./Components/AddedItem/AddedItem";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [addedItemImg, setAddedItemImg] = useState("");
  const [addedItemName, setAddedItemName] = useState("");
  const [addedItemPrice, setAddedItemPrice] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [itemArray, setItemArray] = useState([]);

  const handleAddToCart = (img, name, price) => {
    setAddedItemImg(img);
    setAddedItemName(name);
    setAddedItemPrice(price);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleRemoveFromCart = (id) => {
    setItemArray(itemArray.filter((item) => item !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/products"
          element={
            <>
              <Products />
              <Cards handleAddToCart={handleAddToCart} setItemArray={setItemArray} itemArray={itemArray} />
            </>
          }
        />
        <Route path="/mycart" element={<MyCart itemArray={itemArray} handleRemoveFromCart={handleRemoveFromCart} />} />
      </Routes>
      {isPopupVisible && (
        <div className="popup">
          <AddedItem
            AddedItemImg={addedItemImg}
            AddedItemName={addedItemName}
            AddedItemPrice={addedItemPrice}
            handleClosePopup={handleClosePopup}
          />
        </div>
      )}
    </Router>
  );
}

export default App;
