import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import Coupon from "./Coupon";
import OrderSummary from "./OrderSummary";

function Cart({ cartRef }) {
  const { state } = useCart();

  return (
    <section className="cart-section" ref={cartRef}>
      <div className="section-heading">
        <span>YOUR SHOPPING BAG</span>
        <h2>Shopping Cart 🛒</h2>
      </div>

      {state.cart.length === 0 ? (
        <div className="empty-cart">
          <div>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <a href="#products">Browse Products</a>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-left">
            <div className="cart-items">
              {state.cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <Coupon />
          </div>

          <OrderSummary />
        </div>
      )}
    </section>
  );
}

export default Cart;