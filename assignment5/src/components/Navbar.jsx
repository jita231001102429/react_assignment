import { useCart } from "../context/CartContext";

function Navbar({ cartRef }) {
  const { state } = useCart();

  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        🛍️ <span>Shopora</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>

        <button className="cart-button" onClick={scrollToCart}>
          🛒 Cart
          <span>{totalItems}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;