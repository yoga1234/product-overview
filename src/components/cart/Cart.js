import { iconDelete, imageProduct1Tmb } from "../../assets";
import "./Cart.css";

const checkCart = () => {
  let product;
  if (typeof Storage !== "undefined") {
    product = localStorage.getItem("productTotal");
  } else {
    alert("Storage is not available, the apps will not work as it should be");
  }
  return product;
};

const Cart = ({ openUi }) => {
  return (
    <div className={openUi === true ? "cart-container" : "cart-hidden"}>
      <div className="cart-title">
        <h2>Cart</h2>
      </div>
      {checkCart() === null ? (
        <div className="cart-empty">
          <p>Your cart is Empty.</p>
        </div>
      ) : (
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
                <span className="cart-quantity"> {checkCart()}</span>
                <span className="total-price"> $375.0</span>
              </div>
            </div>
            <img src={iconDelete} alt="delete" className="cart-delete" />
          </div>
          <button className="cart-checkout">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
