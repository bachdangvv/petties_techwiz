import { Link } from 'react-router-dom';

// Importing CSS
import './error.css';

export default function ErrorPage() {
    return (
        <>
        <aside className='aside-left'></aside>
            <section className='error-page-container'>
                <main className="main">
                    <div className="error-main-content">
                        {/* Image and 404 error code */}
                        <div className="error-container">
                            <div className="content-box">
                                <span className="error-code">404</span>
                                <i class="bi bi-cup-hot coffee-icon"></i>
                            </div>
                        </div>

                        {/* Error message and more details */}
                        <div className="error-message">
                            <h1>Oops! Trang không tồn tại</h1>
                            
                            <p className="error-detail">
                                Trang bạn đang tìm kiếm có thể đã được di chuyển, xóa hoặc không bao giờ tồn tại. Hãy thử các liên kết dưới đây hoặc quay về trang chủ.
                            </p>
                        </div>

                        {/* 3 navigating buttons */}
                        <div className="function-buttons">
                            <Link to="/homepage" className='back-to-home-button'>
                                <i class="bi bi-house home-icon"></i>
                                Về trang chủ
                            </Link>

                            <button className="back-button">
                                <i class="bi bi-arrow-left go-back-icon"></i>
                                Quay lại
                            </button>

                            <button className="search-button">
                                <i class="bi bi-search search-icon"></i>
                                Tìm kiếm
                            </button>
                        </div>

                        {/* Navigation section */}
                        <div className="navigation">
                            <h3 className="navigation-heading">Hoặc thử các liên kết sau:</h3>
                            <div className="navigation-container">
                                <Link to="/product" className="navigation-section">
                                    <div className="navigation-icon">
                                        <i class="bi bi-cup-hot"></i>
                                    </div>
                                    <h5>Sản phẩm</h5>
                                    <p className="brown-text">Cà phê cao cấp</p>
                                </Link>
                                <Link className="navigation-section">
                                    <div className="navigation-icon">
                                        <i class="bi bi-percent"></i>
                                    </div>
                                    <h5>Khuyến mãi</h5>
                                    <p className="brown-text">Ưu đãi hấp dẫn</p>
                                </Link>
                                <Link to="/blog" className="navigation-section">
                                    <div className="navigation-icon">
                                        <i class="bi bi-pencil-square"></i>
                                    </div>
                                    <h5>Blog</h5>
                                    <p className="brown-text">Kiến thức cà phê</p>
                                </Link>
                                <Link to="/contact" className="navigation-section">
                                    <div className="navigation-icon">
                                        <i class="bi bi-telephone-fill"></i>
                                    </div>
                                    <h5>Liên hệ</h5>
                                    <p className="brown-text">Hỗ trợ 24/7</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        <aside className='aside-right'></aside>
        </>
    )
};