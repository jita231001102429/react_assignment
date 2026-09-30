import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <span>OUR COLLECTION</span>
        <h2>Explore Products</h2>
        <p>Everything you need, all in one place.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;