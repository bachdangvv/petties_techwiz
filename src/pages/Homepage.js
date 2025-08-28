function Homepage(){
    return(
        <div>
            <section className="hero reveal">
                <div className="hero-media">
                    <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2060&auto=format&fit=crop" alt="Cà phê hạt rang thủ công"/>
                    <div className="hero-content">
                        <div className="hero-inner">
                            <div className="badge best">Roastery • Thủ công</div>
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
                                <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop" alt="Coffee Bag 1"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop" alt="Coffee Bag 2"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://images.unsplash.com/photo-1502462041640-562f94f7ec12?q=80&w=800&auto=format&fit=crop" alt="Coffee Bag 3"/>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>

            <section className="container reveal" id="sanpham">
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
                            <img src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1600&auto=format&fit=crop" alt="Robusta Đắk Lắk" loading="lazy"/>
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
                            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop" alt="House Blend Special" loading="lazy"/>
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
                            <img src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop" alt="Cold Brew Premium" loading="lazy"/>
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
                            <div className="ico" ariaHidden="true">
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
    )
};

export default Homepage;