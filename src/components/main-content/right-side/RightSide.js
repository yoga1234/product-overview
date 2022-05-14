import React from "react";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="right-container">
      <h3 className="company-name">SNEAKER COMPANY</h3>
      <h2 className="product-name">Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <span>$125.00</span>
      <span>50%</span>
      <span>$250.00</span> {/* this should be stripped */}
      {/* this is counter, minus button and plus button */}
      <button>-</button>
      <span>0</span>
      <button>+</button>
      <button>Add to cart</button>
    </div>
  );
};

export default RightSide;
