import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-product-image">{item.emoji}</div>

      <div className="cart-product-details">
        <h3>{item.name}</h3>
        <p>₹{item.price.toLocaleString("en-IN")} each</p>
      </div>

      <div className="quantity-control">
        <button
          onClick={() =>
            dispatch({
              type: "DECREASE_QUANTITY",
              payload: item.id,
            })
          }
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() =>
            dispatch({
              type: "INCREASE_QUANTITY",
              payload: item.id,
            })
          }
        >
          +
        </button>
      </div>

      <div className="item-total">
        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
      </div>

      <button
        className="remove-button"
        onClick={() =>
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: item.id,
          })
        }
      >
        🗑️
      </button>
    </div>
  );
}

export default CartItem;