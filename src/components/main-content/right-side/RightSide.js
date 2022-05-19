import React, { useState } from "react";
import { cartWhite } from "../../../assets";
import "./RightSide.css";

const localStorageData = (data) => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("productTotal", data);
    alert(data + " product has been added to the cart!");
  } else {
    alert("Storage is not available, the apps will not work as it should be");
  }
};

const RightSide = () => {
  const [totalBuy, setTotalBuy] = useState(0);
  return (
    <div className="right-container">
      <h3 className="company-name">SNEAKER COMPANY</h3>
      <h2 className="product-name">Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-and-discount">
        <span className="current-price">$125.00</span>
        <span className="total-discount">50%</span>
      </div>
      <span className="product-price">$250.00</span>
      <div className="counter-cart-container">
        <div className="counter">
          <button
            onClick={() => (totalBuy <= 0 ? "" : setTotalBuy(totalBuy - 1))}
            className="minus-button"
          >
            -
          </button>
          <span className="product-counter">{totalBuy}</span>
          <button
            onClick={() => setTotalBuy(totalBuy + 1)}
            className="plus-button"
          >
            +
          </button>
        </div>
        <button
          onClick={() =>
            totalBuy === 0
              ? alert("Please add some product!")
              : localStorageData(totalBuy)
          }
          className="add-to-cart"
        >
          <img src={cartWhite} alt="cart" />
          &nbsp; Add to cart
        </button>
      </div>
    </div>
  );
};

export default RightSide;
