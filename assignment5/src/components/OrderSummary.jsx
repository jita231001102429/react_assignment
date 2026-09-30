import { useCart } from "../context/CartContext";

function OrderSummary() {
  const { state, dispatch } = useCart();

  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = state.coupon
    ? (subtotal * state.coupon.discount) / 100
    : 0;

  const afterDiscount = subtotal - discount;

  const gst = afterDiscount * 0.18;

  const finalTotal = afterDiscount + gst;

  return (
    <div className="summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString("en-IN")}</span>
      </div>

      <div className="summary-row discount">
        <span>Coupon Discount</span>
        <span>
          - ₹{discount.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>

      <div className="summary-row">
        <span>After Discount</span>
        <span>
          ₹{afterDiscount.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>

      <div className="summary-row">
        <span>GST (18%)</span>
        <span>
          ₹{gst.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>

      <div className="summary-divider"></div>

      <div className="final-total">
        <span>Total</span>
        <strong>
          ₹
          {finalTotal.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}
        </strong>
      </div>

      <button
        className="checkout-button"
        onClick={() => alert("Thank you for shopping with Shopora! 🛍️")}
      >
        Proceed to Checkout →
      </button>

      <button
        className="clear-cart"
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default OrderSummary;