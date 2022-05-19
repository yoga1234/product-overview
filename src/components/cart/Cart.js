import { iconDelete, imageProduct1Tmb } from "../../assets";
import "./Cart.css";

const Cart = ({ openUi }) => {
  return (
    <div className={openUi === true ? "cart-container" : "cart-hidden"}>
      {/* <div className="cart-container"> */}
      <div className="cart-title">
        <h2>Cart</h2>
      </div>
      <div className="cart-content">
        <div className="cart-details">
          <img
            src={imageProduct1Tmb}
            alt="product buyed"
            className="cart-image"
          />
          <div className="cart-title-and-price">
            <span className="cart-buy-title">
              Fall Limited Edition Sneakers
            </span>
            <div className="cart-price-details">
              <span className="cart-price">$125.0 </span>
              <span className="cart-x">x </span>
              <span className="cart-quantity"> 3</span>
              <span className="total-price"> $375.0</span>
            </div>
          </div>
          <img src={iconDelete} alt="delete" className="cart-delete" />
        </div>
        <button className="cart-checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
