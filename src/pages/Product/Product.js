import { useMemo, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import COFFEE_IMAGES from "./images";
import "./product.css";

const TAGS = ["Bán chạy", "Mới", "Đặc biệt", "Giảm giá"];

const PRODUCTS = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Arabica Blend ${i + 1}`,
  price: 30000 + (i % 8) * 5000,
  grams: [250, 500][i % 2],
  image: COFFEE_IMAGES[i % COFFEE_IMAGES.length],
  tag: TAGS[i % TAGS.length],
  rating: 3 + (i % 3),
}));

function Product() {
  const { addItem, totals } = useCart();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("new");
  const pageSize = 12;

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    switch (sort) {
      case "priceAsc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      default:
        list = [...list];
    }
    return list;
  }, [query, sort]);

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const start = (page - 1) * pageSize;
  const current = filtered.slice(start, start + pageSize);

  const goToCart = () => navigate("/cart");

  return (
    <div className="product-page">
      <aside className="product-aside">
        <div className="aside-card">
          <h3 className="aside-title">Bộ lọc</h3>
          <div className="filter-group">
            <label className="filter-label">Tìm kiếm</label>
            <input
              className="search"
              placeholder="Search coffees..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>
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
        <div className="page-head">
          <h1>Cửa hàng cà phê</h1>
          <p>Khám phá bộ sưu tập cà phê cao cấp của chúng tôi</p>
        </div>
        <div className="toolbar">
          <div className="results">Hiển thị {filtered.length} kết quả</div>
          <div className="sort">
            <label>Sort</label>
            <select value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }}>
              <option value="new">Mới nhất</option>
              <option value="priceAsc">Giá: Thấp → Cao</option>
              <option value="priceDesc">Giá: Cao → Thấp</option>
            </select>
          </div>
        </div>

        <div className="grid products-grid">
          {current.map((p) => (
            <div key={p.id} className="card product-card">
              <div className="thumb">
                <img src={p.image} alt={p.name} />
                <span className="badge tag">{p.tag}</span>
              </div>
              <div className="content">
                <h3>{p.name}</h3>
                <div className="meta-line">
                  <span className="stars">{"★".repeat(p.rating)}{"☆".repeat(5 - p.rating)}</span>
                  <span className="gram">{p.grams}g</span>
                </div>
                <div className="price">
                  <span>{p.price.toLocaleString()} đ</span>
                </div>
                <div className="cta">
                  <button className="btn btn-primary" onClick={() => addItem(p, 1)}>
                    Thêm vào giỏ
                  </button>
                  <button className="btn btn-ghost" onClick={() => navigate("/productdetail")}>Chi tiết</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            className="pill"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`pill page ${page === i + 1 ? "active" : ""}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="pill"
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default Product;