import { useMemo, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import COFFEE_IMAGES from "./images";
import "./product.css";

const PRODUCTS = Array.from({ length: 24 }, (_, i) => ({
  id: 200 + i + 1,
  name: `Robusta Reserve ${i + 1}`,
  price: 28000 + (i % 8) * 4000,
  image: COFFEE_IMAGES[i % COFFEE_IMAGES.length],
  notes: ["Bold", "Smoky", "Spice", "Earthy"][i % 4],
}));

function Product2() {
  const { addItem, totals } = useCart();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const filtered = useMemo(() => {
    if (!query) return PRODUCTS;
    const q = query.toLowerCase();
    return PRODUCTS.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const start = (page - 1) * pageSize;
  const current = filtered.slice(start, start + pageSize);

  const goToCart = () => navigate("/cart");

  return (
    <div className="product-page">
      <aside className="product-aside">
        <div className="aside-card">
          <h3 className="aside-title">Search</h3>
          <input
            className="search"
            placeholder="Search coffees..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />
          <div className="mini-cart">
            <div className="mini-row">
              <span>Items</span>
              <strong>{totals.count}</strong>
            </div>
            <div className="mini-row">
              <span>Subtotal</span>
              <strong>{totals.subtotal.toLocaleString()} đ</strong>
            </div>
            <button className="btn btn-primary mini-cta" onClick={goToCart}>Go to Cart to Pay</button>
          </div>
        </div>
      </aside>

      <main className="product-main">
        <div className="header">
          <div>
            <h2>Our Coffee Selection</h2>
            <p>Strong, bold flavors for a powerful brew.</p>
          </div>
        </div>

        <div className="grid">
          {current.map((p) => (
            <div key={p.id} className="card">
              <div className="thumb">
                <img src={p.image} alt={p.name} />
                <div className="badge pill tag">{p.notes}</div>
              </div>
              <div className="content">
                <h3>{p.name}</h3>
                <div className="price">
                  <span>{p.price.toLocaleString()} đ</span>
                </div>
                <div className="cta">
                  <button className="btn btn-primary" onClick={() => addItem(p, 1)}>
                    Add to cart
                  </button>
                  <button className="btn btn-ghost" onClick={() => navigate("/productdetail")}>Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="pill" disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} className={`pill page ${page === i + 1 ? "active" : ""}`} onClick={() => setPage(i + 1)}>{i + 1}</button>
          ))}
          <button className="pill" disabled={page === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>Next</button>
        </div>
      </main>
    </div>
  );
}

export default Product2;
