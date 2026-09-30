import { useState } from "react";
import { useCart } from "../context/CartContext";

const coupons = {
  SHOP10: 10,
  SAVE15: 15,
  WELCOME20: 20,
};

function Coupon() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const { state, dispatch } = useCart();

  const applyCoupon = () => {
    const enteredCode = code.trim().toUpperCase();

    if (coupons[enteredCode]) {
      dispatch({
        type: "APPLY_COUPON",
        payload: {
          code: enteredCode,
          discount: coupons[enteredCode],
        },
      });

      setMessage(`✓ ${coupons[enteredCode]}% discount applied!`);
    } else {
      setMessage("❌ Invalid coupon code");
    }
  };

  const removeCoupon = () => {
    dispatch({ type: "REMOVE_COUPON" });
    setCode("");
    setMessage("");
  };

  return (
    <div className="coupon-box">
      <h3>🎟️ Have a coupon?</h3>

      {!state.coupon ? (
        <>
          <div className="coupon-input">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <button onClick={applyCoupon}>Apply</button>
          </div>

          {message && (
            <p
              className={
                message.includes("Invalid")
                  ? "coupon-error"
                  : "coupon-success"
              }
            >
              {message}
            </p>
          )}

          <small>
            Try: <b>SHOP10</b>, <b>SAVE15</b>, or <b>WELCOME20</b>
          </small>
        </>
      ) : (
        <div className="applied-coupon">
          <div>
            <strong>🎉 {state.coupon.code}</strong>
            <p>{state.coupon.discount}% discount applied</p>
          </div>

          <button onClick={removeCoupon}>Remove</button>
        </div>
      )}
    </div>
  );
}

export default Coupon;