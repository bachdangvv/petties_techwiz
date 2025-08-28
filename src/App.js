import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <section class="hero reveal">
          <div class="hero-media">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2060&auto=format&fit=crop" alt="Cà phê hạt rang thủ công"/>
            <div class="hero-content">
              <div class="hero-inner">
                <div class="badge best">Roastery • Thủ công</div>
                <h1>Cà phê cao cấp, đánh thức mọi giác quan</h1>
                <p>Blend thủ công từ hạt Arabica & Robusta tuyển chọn, rang mới mỗi ngày. Giao nhanh trong 2h tại HCM & HN.</p>
                <div class="hero-cta">
                  <a href="#sanpham" class="btn btn-primary">Mua ngay</a>
                  <a href="#gioithieu" class="btn btn-ghost">Khám phá hạt</a>
                </div>
                <div class="meta">Chứng nhận Direct Trade • Truy xuất nguồn gốc rõ ràng</div>
              </div>
            </div>
          </div>
        </section>

    <section class="about section" id="about">
      <div class="container about-container">
        <div class="about-content">
          <h2 class="section-title">Về Coffee Premium</h2>
          <p>
            Hơn 15 năm theo đuổi cà phê chất lượng. Mỗi mẻ rang là một câu chuyện - từ
            nông trại đến chiếc cốc trên tay bạn.
          </p>
          <p>
            Chúng tôi tuyển chọn hạt xanh hạng đặc biệt, rang theo hồ sơ riêng và cupping
            mỗi ngày để đảm bảo đồng nhất.
          </p>
          {/* <a href="#" className="btn">Tìm hiểu thêm</a> */}
        </div>

        <div class="about-media swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop" alt="Coffee Bag 1"/>
            </div>
            <div class="swiper-slide">
              <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop" alt="Coffee Bag 2"/>
            </div>
            <div class="swiper-slide">
              <img src="https://images.unsplash.com/photo-1502462041640-562f94f7ec12?q=80&w=800&auto=format&fit=crop" alt="Coffee Bag 3"/>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>

        <section class="container reveal" id="sanpham">
          <div class="sec-head">
            <h2>Sản phẩm nổi bật</h2>
            <p>Hạt chọn lọc - rang mới mỗi ngày</p>
          </div>

          <div class="grid">
            <article class="card">
              <div class="thumb">
                <img src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1600&auto=format&fit=crop" alt="Arabica Ethiopia" loading="lazy"/>
                <span class="badge best">Bán chạy</span>
              </div>
              <div class="content">
                <h3>Arabica Ethiopia</h3>
                <p class="notes">Trái cây - hương hoa - hậu ngọt</p>
                <div class="price"><span>299.000đ</span> <s>349.000đ</s></div>
                <div class="cta">
                  <button class="btn btn-primary">Thêm vào giỏ</button>
                  <button class="btn quick">Xem nhanh</button>
                </div>
              </div>
            </article>

            <article class="card">
              <div class="thumb">
                <img src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1600&auto=format&fit=crop" alt="Robusta Đắk Lắk" loading="lazy"/>
                <span class="badge new">Mới</span>
              </div>
              <div class="content">
                <h3>Robusta Đắk Lắk</h3>
                <p class="notes">Body dày - socola đắng - crema mịn</p>
                <div class="price"><span>249.000đ</span> <s>290.000đ</s></div>
                <div class="cta">
                  <button class="btn btn-primary">Thêm vào giỏ</button>
                  <button class="btn quick">Xem nhanh</button>
                </div>
              </div>
            </article>

            <article class="card">
              <div class="thumb">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop" alt="House Blend Special" loading="lazy"/>
                <span class="badge sale">-15%</span>
              </div>
              <div class="content">
                <h3>House Blend Special</h3>
                <p class="notes">Cân bằng - vị caramel - hậu socola</p>
                <div class="price"><span>329.000đ</span> <s>390.000đ</s></div>
                <div class="cta">
                  <button class="btn btn-primary">Thêm vào giỏ</button>
                  <button class="btn quick">Xem nhanh</button>
                </div>
              </div>
            </article>

            <article class="card">
              <div class="thumb">
                <img src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop" alt="Cold Brew Premium" loading="lazy"/>
                <span class="badge new">Mùa hè</span>
              </div>
              <div class="content">
                <h3>Cold Brew Premium</h3>
                <p class="notes">Mát lạnh - vị cam & caramel</p>
                <div class="price"><span>189.000đ</span></div>
                <div class="cta">
                  <button class="btn btn-primary">Thêm vào giỏ</button>
                  <button class="btn quick">Xem nhanh</button>
                </div>
              </div>
            </article>
          </div>

          <a class="btn pill view-more" href="#sanpham">Xem tất cả sản phẩm</a>
        </section>

        <section class="why reveal" id="why">
          <div class="container">
            <div class="sec-head">
              <h2>Tại sao chọn Coffee Premium?</h2>
              <p>Lợi ích vượt trội khi mua cà phê tại Coffee Premium</p>
            </div>
            <div class="icons">
              <div class="item">
                <div class="ico" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="#A45B1C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div><strong>100% Nguyên chất</strong><p class="muted">Không pha tạp - chất lượng ổn định</p></div>
              </div>
              <div class="item">
                <div class="ico" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 11l9-8 9 8-9 8-9-8z" stroke="#A45B1C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div><strong>Nguồn gốc rõ ràng</strong><p class="muted">Direct Trade - truy xuất nông trại</p></div>
              </div>
              <div class="item">
                <div class="ico" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 7h13l5 6v4H3V7z" stroke="#A45B1C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div><strong>Giao nhanh 2h</strong><p class="muted">Miễn phí nội thành ≥ 500k</p></div>
              </div>
              <div class="item">
                <div class="ico" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" stroke="#A45B1C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div><strong>Hỗ trợ 24/7</strong><p class="muted">Đội ngũ CSKH nhiệt tình</p></div>
              </div>
            </div>
          </div>
        </section>

        <section class="testi reveal">
          <div class="container">
            <div class="sec-head">
              <h2>Khách hàng nói gì về chúng tôi</h2>
              <p>Những đánh giá chân thật từ khách hàng</p>
            </div>
            <div class="wrap">
              <div class="quote">
                <div class="user">
                  <div class="avatar"><img src="https://i.pravatar.cc/88?img=12" alt=""/></div>
                  {/* <div><strong>Nguyễn Văn A</strong><br><small class="muted">Khách hàng VIP</small></div> */}
                </div>
                <div class="stars">★★★★★</div>
                <p>Cà phê tuyệt vời! Mùi thơm quyến rũ, vị sạch và hậu ngọt. Đặt đều đặn mỗi tuần.</p>
              </div>
              <div class="quote">
                <div class="user">
                  <div class="avatar"><img src="https://i.pravatar.cc/88?img=32" alt=""/></div>
                  {/* <div><strong>Trần Thị B</strong><br><small class="muted">Chủ quán cà phê</small></div> */}
                </div>
                <div class="stars">★★★★★</div>
                <p>Chất lượng ổn định, giá hợp lý. Khách của tôi rất thích, đặc biệt House Blend.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="blog reveal" id="blog">
          <div class="container">
            <div class="sec-head">
              <h2>Blog & Chia sẻ</h2>
              <p>Những bài viết mới nhất về cà phê và cuộc sống</p>
            </div>
            <div class="blog-grid">
              <article class="post">
                <div class="thumb">
                  <img src="https://images.unsplash.com/photo-1502462041640-562f94f7ec12?q=80&w=1600&auto=format&fit=crop" alt=""/>
                </div>
                <div class="body">
                  <span class="badge best">Hướng dẫn</span>
                  <h3 class="h6">Cách pha cà phê ngon tại nhà</h3>
                  <p class="muted">Bí quyết pour-over & espresso, dụng cụ nên dùng và tỷ lệ vàng…</p>
                  <div class="meta"><span>15 Dec 2024</span></div>
                </div>
              </article>
              <article class="post">
                <div class="thumb">
                  <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop" alt=""/>
                </div>
                <div class="body">
                  <span class="badge new">Khám phá</span>
                  <h3 class="h6">Khám phá vùng cà phê Đắk Lắk</h3>
                  <p class="muted">Từ nông trại đến ly cà phê - terroir tạo nên hương vị đặc trưng.</p>
                  <div class="meta"><span>12 Dec 2024</span></div>
                </div>
              </article>
            </div>
            <a class="btn pill view-more" href="#blog">Xem tất cả bài viết</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;