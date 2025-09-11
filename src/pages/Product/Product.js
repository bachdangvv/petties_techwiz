import { useMemo, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/products.json";
import styles from "./product.module.css";

function Product() {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("new");
  const [selectedCategories, setSelectedCategories] = useState([]); // Food, Bed, Shampoo, Cage, Harness, Toy
  const [selectedPetTypes, setSelectedPetTypes] = useState([]); // Dog, Cat
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const pageSize = 9; // 3x3 grid like in the image

  const filtered = useMemo(() => {
    let list = productsData;
    
    // Search filter
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    
    // Category filter
    if (selectedCategories.length > 0) {
      list = list.filter((p) => {
        return selectedCategories.includes(p.category);
      });
    }
    // Pet type filter
    if (selectedPetTypes.length > 0) {
      list = list.filter((p) => {
        const types = String(p.petType || "").split(",").map((s) => s.trim());
        return selectedPetTypes.some((t) => types.includes(t));
      });
    }
    
    // Price range filter
    if (selectedPriceRange) {
      switch (selectedPriceRange) {
        case "under20":
          list = list.filter(p => p.price < 20);
          break;
        case "20-40":
          list = list.filter(p => p.price >= 20 && p.price <= 40);
          break;
        case "40-80":
          list = list.filter(p => p.price >= 40 && p.price <= 80);
          break;
        case "over80":
          list = list.filter(p => p.price > 80);
          break;
        default:
          list = [...list];
      }
    }
    
    // Sort
    switch (sort) {
      case "priceAsc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.reviews.stars - a.reviews.stars);
        break;
      default:
        list = [...list];
    }
    
    return list;
  }, [query, sort, selectedCategories, selectedPetTypes, selectedPriceRange]);

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const start = (page - 1) * pageSize;
  const current = filtered.slice(start, start + pageSize);

  // navigate to cart helper (not used currently)

  // Helper functions for filters
  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setPage(1);
  };

  const togglePetType = (type) => {
    setSelectedPetTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
    setPage(1);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange("");
    setSelectedPetTypes([]);
    setQuery("");
    setPage(1);
  };

  // Get unique categories and weights for filter options
  const categories = [...new Set(productsData.map(p => p.category))];
  const petTypes = ["Dog", "Cat"];

  return (
    <div className={styles.productPage}>
      {/* Header Section */}
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>All Products</h1>
          <nav className={styles.breadcrumb}>
            <span>Trang chủ</span>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <span className={styles.breadcrumbCurrent}>All Products</span>
          </nav>
        </div>
        <div className={styles.headerDecoration}>
          <img src="/pet-bg-img/pet-bg-img.png" alt="Decoration" className={styles.decorationImage} />
        </div>
      </div>

      <div className={styles.mainLayout}>
        {/* Left Sidebar Filters */}
        <aside className={styles.productAside}>
          <div className={styles.asideCard}>
            <h3 className={styles.asideTitle}>Bộ lọc</h3>
            
            {/* Search */}
            <div className={styles.filterGroup}>
              <input
                className={styles.searchInput}
                placeholder="Nhập từ khóa..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
              />
            </div>

            {/* Categories */}
            <div className={styles.filterGroup}>
              <h4 className={styles.filterSectionTitle}>Danh mục</h4>
              {categories.map(category => (
                <label key={category} className={styles.filterCheckbox}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  <span className={styles.checkboxLabel}>
                    {category} ({productsData.filter(p => p.category === category).length})
                  </span>
                </label>
              ))}
            </div>

            {/* Pet Type */}
            <div className={styles.filterGroup}>
              <h4 className={styles.filterSectionTitle}>Loại thú cưng</h4>
              {petTypes.map(pt => (
                <label key={pt} className={styles.filterCheckbox}>
                  <input type="checkbox" checked={selectedPetTypes.includes(pt)} onChange={() => togglePetType(pt)} />
                  <span className={styles.checkboxLabel}>{pt}</span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className={styles.filterGroup}>
              <h4 className={styles.filterSectionTitle}>Khoảng giá (USD)</h4>
              <label className={styles.filterRadio}>
                <input
                  type="radio"
                  name="priceRange"
                  value="under20"
                  checked={selectedPriceRange === "under20"}
                  onChange={(e) => { setSelectedPriceRange(e.target.value); setPage(1); }}
                />
                <span>Under $20</span>
              </label>
              <label className={styles.filterRadio}>
                <input
                  type="radio"
                  name="priceRange"
                  value="20-40"
                  checked={selectedPriceRange === "20-40"}
                  onChange={(e) => { setSelectedPriceRange(e.target.value); setPage(1); }}
                />
                <span>$20 - $40</span>
              </label>
              <label className={styles.filterRadio}>
                <input
                  type="radio"
                  name="priceRange"
                  value="40-80"
                  checked={selectedPriceRange === "40-80"}
                  onChange={(e) => { setSelectedPriceRange(e.target.value); setPage(1); }}
                />
                <span>$40 - $80</span>
              </label>
              <label className={styles.filterRadio}>
                <input
                  type="radio"
                  name="priceRange"
                  value="over80"
                  checked={selectedPriceRange === "over80"}
                  onChange={(e) => { setSelectedPriceRange(e.target.value); setPage(1); }}
                />
                <span>Over $80</span>
              </label>
            </div>

            {/* Apply Button */}
            <button className={styles.applyFiltersBtn} onClick={clearFilters}>
              Xóa bộ lọc
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className={styles.productMain}>
          <div className={styles.toolbar}>
            <div className={styles.results}>Hiển thị {filtered.length} kết quả</div>
            <div className={styles.sort}>
              <label>Sắp xếp</label>
              <select value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }}>
                <option value="new">Mới nhất</option>
                <option value="priceAsc">Giá: Thấp → Cao</option>
                <option value="priceDesc">Giá: Cao → Thấp</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className={styles.productsGrid}>
            {current.map((p) => (
              <div key={p.id} className={styles.productCard}>
                <div className={styles.productImageContainer}>
                  <img src={p.image} alt={p.name} className={styles.productImage} />
                  <button className={styles.favoriteBtn}>
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
                
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{p.name}</h3>
                  
                  <div className={styles.productDetails}>
                    <div className={styles.detailItem}>
                      <span className={`${styles.detailDot} ${styles.detailDotPink}`}></span>
                      <span className={styles.detailLabel}>Danh mục:</span>
                      <span className={styles.detailValue}>{p.category}</span>
                    </div>
                    
                    <div className={styles.detailItem}>
                      <span className={`${styles.detailDot} ${styles.detailDotPurple}`}></span>
                      <span className={styles.detailLabel}>Thú cưng:</span>
                      <span className={styles.detailValue}>{p.petType}</span>
                    </div>
                  </div>
                  
                  <div className={styles.productRating}>
                    <div className={styles.stars}>
                      {"★".repeat(Math.floor(p.reviews.stars))}
                      {"☆".repeat(5 - Math.floor(p.reviews.stars))}
                    </div>
                    <span className={styles.ratingNumber}>{p.reviews.stars}</span>
                  </div>
                  
                  <div className={styles.productPrice}>
                    <span className={styles.currentPrice}>${p.price.toFixed(2)}</span>
                  </div>
                  
                  <div className={styles.productActions}>
                    <button className={styles.addToCartBtn} onClick={() => addItem(p, 1)}>
                      <i className="bi bi-cart"></i>
                      <span>Thêm vào giỏ</span>
                    </button>
                    <button className={styles.viewDetailsBtn} onClick={() => navigate(`/productdetail/${p.id}`)}>
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button
              className={styles.paginationBtn}
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              ←
            </button>
            
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  className={`${styles.paginationNumber} ${page === pageNum ? styles.active : ""}`}
                  onClick={() => setPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
            
            {totalPages > 5 && (
              <>
                <span className={styles.paginationDots}>...</span>
                <button
                  className={styles.paginationNumber}
                  onClick={() => setPage(totalPages)}
                >
                  {totalPages}
                </button>
              </>
            )}
            
            <button
              className={styles.paginationBtn}
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Product;