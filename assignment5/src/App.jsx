import { useRef } from "react";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const cartRef = useRef(null);

  return (
    <CartProvider>
      <Navbar cartRef={cartRef} />

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="hero-tag">WELCOME TO SHOPORA</span>

            <h1>
              Shop Smart.
              <br />
              <span>Live Better.</span>
            </h1>

            <p>
              Discover amazing products at prices you'll love.
              Add your favourites to your cart and enjoy a seamless
              shopping experience.
            </p>

            <a href="#products" className="hero-button">
              Explore Products →
            </a>
          </div>

          <div className="hero-visual">
            <div className="floating-card card-one">🎧</div>
            <div className="floating-card card-two">⌚</div>
            <div className="floating-card card-three">📱</div>

            <div className="hero-circle">
              🛍️
            </div>
          </div>
        </section>

        <ProductList />

        <Cart cartRef={cartRef} />

        <section className="about" id="about">
          <span>ABOUT SHOPORA</span>
          <h2>Simple shopping. Happy customers.</h2>
          <p>
            Shopora is a React-based online shopping cart application
            built using modern state management techniques including
            Context API and useReducer.
          </p>
        </section>
      </main>

      <footer>
        <div>🛍️ Shopora</div>
        <p>Built with React • useReducer • Context API</p>
      </footer>
    </CartProvider>
  );
}

export default App;