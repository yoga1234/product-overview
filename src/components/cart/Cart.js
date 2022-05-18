import "./Cart.css";

const Cart = ({ openUi }) => {
  return (
    <div className={openUi ? "cart-container" : "cart-hidden"}>
      {/* <div className="cart-container"> */}
      <div className="cart-title">
        <h2>Cart</h2>
      </div>
      <div className="cart-empty">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default Cart;
