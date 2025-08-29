import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

function Apphomepage() {
  useEffect(() => {
    // 1) ABOUT CAROUSEL
    const el = document.querySelector(".about-media.swiper");
    if (el && typeof Swiper !== "undefined") {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const swiper = new Swiper(el, {
        loop: true,
        speed: 600,
        autoplay: reduceMotion
          ? false
          : {
              delay: 3000,
              disableOnInteraction: false,
            },
        pagination: {
          el: el.querySelector(".swiper-pagination"),
          clickable: true,
        },
        touchReleaseOnEdges: true,
        grabCursor: true,
      });

      el.addEventListener("mouseenter", () => {
        if (swiper.autoplay) swiper.autoplay.stop();
      });
      el.addEventListener("mouseleave", () => {
        if (swiper.autoplay) swiper.autoplay.start();
      });
    }

    // 2) HEADER EFFECT ON SCROLL
    const header = document.querySelector("header");
    const onScroll = () => {
      const scrolled = window.scrollY > 10;
      header?.classList.toggle("scrolled", scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // 3) SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        const target = id && id.length > 1 ? document.querySelector(id) : null;
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // 4) ADD TO CART TOAST
    const buttons = document.querySelectorAll(".card .btn.btn-primary");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const name = card ? card.querySelector("h3, .h6")?.textContent?.trim() : "Sản phẩm";
        showToast(`Đã thêm “${name || "sản phẩm"}” vào giỏ hàng`);
      });
    });

    function showToast(message) {
      let holder = document.querySelector("#toast-holder");
      if (!holder) {
        holder = document.createElement("div");
        holder.id = "toast-holder";
        Object.assign(holder.style, {
          position: "fixed",
          right: "16px",
          bottom: "16px",
          zIndex: "9999",
        });
        document.body.appendChild(holder);
      }
      const t = document.createElement("div");
      t.textContent = message;
      Object.assign(t.style, {
        background: "#4B2E23",
        color: "#fff",
        padding: "10px 14px",
        marginTop: "10px",
        borderRadius: "10px",
        boxShadow: "0 10px 24px rgba(0,0,0,.25)",
        fontWeight: "600",
        maxWidth: "320px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        transform: "translateY(10px)",
        opacity: "0",
        transition: "transform .2s ease, opacity .2s ease",
      });
      holder.appendChild(t);
      requestAnimationFrame(() => {
        t.style.opacity = "1";
        t.style.transform = "translateY(0)";
      });
      setTimeout(() => {
        t.style.opacity = "0";
        t.style.transform = "translateY(10px)";
        setTimeout(() => t.remove(), 200);
      }, 2200);
    }

    // 5) LAZY ENHANCE
    const imgs = document.querySelectorAll("img");
    if ("IntersectionObserver" in window && imgs.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("loaded");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "100px" }
      );

      imgs.forEach((img) => io.observe(img));
    }
  }, []);

  return (
    <div>
        <section className="hero reveal">
            <div className="hero-media">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2060&auto=format&fit=crop" alt="Cà phê hạt rang thủ công"/>
                <div className="hero-content">
                    <div className="hero-inner">
                        <div className="badge best" style={{ marginBottom: "10px" }}>Roastery • Thủ công</div>
                            <h1>Cà phê cao cấp, đánh thức mọi giác quan</h1>
                            <p>Blend thủ công từ hạt Arabica & Robusta tuyển chọn, rang mới mỗi ngày. Giao nhanh trong 2h tại HCM & HN.</p>
                        <div className="hero-cta">
                            <a href="#sanpham" className="btn btn-primary">Mua ngay</a>
                            <a href="#gioithieu" className="btn btn-ghost">Khám phá hạt</a>
                        </div>
                        <div className="meta">Chứng nhận Direct Trade • Truy xuất nguồn gốc rõ ràng</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about section" id="about">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="section-title">Về Coffee Premium</h2>
                    <p>
                        Hơn 15 năm theo đuổi cà phê chất lượng. Mỗi mẻ rang là một câu chuyện - từ
                        nông trại đến chiếc cốc trên tay bạn.
                    </p>
                    <p>
                        Chúng tôi tuyển chọn hạt xanh hạng đặc biệt, rang theo hồ sơ riêng và cupping
                        mỗi ngày để đảm bảo đồng nhất.
                    </p>
                    <a href="#" className="btn">Tìm hiểu thêm</a>
                </div>

                <div className="about-media swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="https://img.freepik.com/premium-photo/beautiful-cup-coffee_948658-219.jpg" alt="Coffee Bag 1"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://tse1.mm.bing.net/th/id/OIP.I6MaSht5aYnmSkaejnPJMgHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Coffee Bag 2"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://img.freepik.com/premium-photo/steam-fresh-coffee_148003-1153.jpg" alt="Coffee Bag 3"/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>

        <section className="container reveal" id="sanpham" style={{ marginTop: "34px"}}>
            <div className="sec-head">
                <h2>Sản phẩm nổi bật</h2>
                <p>Hạt chọn lọc - rang mới mỗi ngày</p>
            </div>

            <div className="grid">
                <article className="card">
                    <div className="thumb">
                        <img src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1600&auto=format&fit=crop" alt="Arabica Ethiopia" loading="lazy"/>
                        <span className="badge best">Bán chạy</span>
                    </div>
                    <div className="content">
                        <h3>Arabica Ethiopia</h3>
                        <p className="notes">Trái cây - hương hoa - hậu ngọt</p>
                        <div className="price"><span>299.000đ</span> <s>349.000đ</s></div>
                        <div className="cta">
                            <button className="btn btn-primary">Thêm vào giỏ</button>
                            <button className="btn quick">Xem nhanh</button>
                        </div>
                    </div>
                </article>

                <article className="card">
                    <div className="thumb">
                        <img src="https://cdn.mos.cms.futurecdn.net/BCgmyWJdQT7xbDhu3QkYrn-1024-80.jpg" alt="Robusta Đắk Lắk" loading="lazy"/>
                        <span className="badge new">Mới</span>
                    </div>
                    <div className="content">
                        <h3>Robusta Đắk Lắk</h3>
                        <p className="notes">Body dày - socola đắng - crema mịn</p>
                        <div className="price"><span>249.000đ</span> <s>290.000đ</s></div>
                        <div className="cta">
                            <button className="btn btn-primary">Thêm vào giỏ</button>
                            <button className="btn quick">Xem nhanh</button>
                        </div>
                    </div>
                </article>

                <article className="card">
                    <div className="thumb">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.JiNMJuF5fpTstcSTFzTo8AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="House Blend Special" loading="lazy"/>
                        <span className="badge sale">-15%</span>
                    </div>
                    <div className="content">
                        <h3>House Blend Special</h3>
                        <p className="notes">Cân bằng - vị caramel - hậu socola</p>
                        <div className="price"><span>329.000đ</span> <s>390.000đ</s></div>
                        <div className="cta">
                            <button className="btn btn-primary">Thêm vào giỏ</button>
                            <button className="btn quick">Xem nhanh</button>
                        </div>
                    </div>
                </article>

                <article className="card">
                    <div className="thumb">
                        <img src="https://simexcodl.com.vn/wp-content/uploads/2024/01/ca-phe-chanh-5-e1705311093332.jpg" alt="Cold Brew Premium" loading="lazy"/>
                        <span className="badge new">Mùa hè</span>
                    </div>
                    <div className="content">
                        <h3>Cold Brew Premium</h3>
                        <p className="notes">Mát lạnh - vị cam & caramel</p>
                        <div className="price"><span>189.000đ</span></div>
                        <div className="cta">
                            <button className="btn btn-primary">Thêm vào giỏ</button>
                            <button className="btn quick">Xem nhanh</button>
                        </div>
                    </div>
                </article>
            </div>

            <a className="btn pill view-more" href="#sanpham">Xem tất cả sản phẩm</a>
        </section>

        <section className="why reveal" id="why">
            <div className="container">
                <div className="sec-head">
                    <h2>Tại sao chọn Coffee Premium?</h2>
                    <p>Lợi ích vượt trội khi mua cà phê tại Coffee Premium</p>
                </div>
                <div className="icons">
                    <div className="item">
                        <div className="ico" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="#A45B1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div><strong>100% Nguyên chất</strong><p className="muted">Không pha tạp - chất lượng ổn định</p></div>
                    </div>
                    <div className="item">
                        <div className="ico" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 11l9-8 9 8-9 8-9-8z" stroke="#A45B1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div><strong>Nguồn gốc rõ ràng</strong><p className="muted">Direct Trade - truy xuất nông trại</p></div>
                    </div>
                    <div className="item">
                        <div className="ico" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 7h13l5 6v4H3V7z" stroke="#A45B1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div><strong>Giao nhanh 2h</strong><p className="muted">Miễn phí nội thành ≥ 500k</p></div>
                    </div>
                    <div className="item">
                        <div className="ico" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" stroke="#A45B1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div><strong>Hỗ trợ 24/7</strong><p className="muted">Đội ngũ CSKH nhiệt tình</p></div>
                    </div>
                </div>
            </div>
        </section>

        <section className="testi reveal">
            <div className="container">
                <div className="sec-head">
                    <h2>Khách hàng nói gì về chúng tôi</h2>
                    <p>Những đánh giá chân thật từ khách hàng</p>
                </div>
                <div className="wrap">
                    <div className="quote">
                        <div className="user">
                            <div className="avatar"><img src="https://i.pravatar.cc/88?img=12" alt=""/></div>
                            <div><strong>Nguyễn Văn A</strong><br/><small className="muted">Khách hàng VIP</small></div>
                        </div>
                        <div className="stars">★★★★★</div>
                        <p>Cà phê tuyệt vời! Mùi thơm quyến rũ, vị sạch và hậu ngọt. Đặt đều đặn mỗi tuần.</p>
                    </div>
                    <div className="quote">
                        <div className="user">
                            <div className="avatar"><img src="https://i.pravatar.cc/88?img=32" alt=""/></div>
                            <div><strong>Trần Thị B</strong><br/><small className="muted">Chủ quán cà phê</small></div>
                        </div>
                        <div className="stars">★★★★★</div>
                        <p>Chất lượng ổn định, giá hợp lý. Khách của tôi rất thích, đặc biệt House Blend.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="blog reveal" id="blog">
            <div className="container">
                <div className="sec-head">
                    <h2>Blog & Chia sẻ</h2>
                    <p>Những bài viết mới nhất về cà phê và cuộc sống</p>
                </div>
                <div className="blog-grid">
                    <article className="post">
                        <div className="thumb">
                            <img src="https://images.unsplash.com/photo-1502462041640-562f94f7ec12?q=80&w=1600&auto=format&fit=crop" alt=""/>
                        </div>
                        <div className="body">
                            <span className="badge best">Hướng dẫn</span>
                            <h3 className="h6">Cách pha cà phê ngon tại nhà</h3>
                            <p className="muted">Bí quyết pour-over & espresso, dụng cụ nên dùng và tỷ lệ vàng…</p>
                            <div className="meta"><span>15 Dec 2024</span></div>
                        </div>
                    </article>
                    <article className="post">
                        <div className="thumb">
                            <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop" alt=""/>
                        </div>
                        <div className="body">
                            <span className="badge new">Khám phá</span>
                            <h3 className="h6">Khám phá vùng cà phê Đắk Lắk</h3>
                            <p className="muted">Từ nông trại đến ly cà phê - terroir tạo nên hương vị đặc trưng.</p>
                            <div className="meta"><span>12 Dec 2024</span></div>
                        </div>
                    </article>
                </div>
                <a className="btn pill view-more" href="#blog">Xem tất cả bài viết</a>
            </div>
        </section>
    </div>
  );
}

export default Apphomepage;