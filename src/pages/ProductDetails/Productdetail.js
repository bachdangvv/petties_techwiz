// Importing current product images
import mainShot from '../../assets/current-product-images/main-shot.avif';
import secondShot from '../../assets/current-product-images/second-shot.avif';
import thirdShot from '../../assets/current-product-images/third-shot.avif';
import fourthShot from '../../assets/current-product-images/fourth-shot.avif';
// Importing related product images
import firstProduct from '../../assets/related-product-images/first-product.avif';
import secondProduct from '../../assets/related-product-images/second-product.avif';
import thirdProduct from '../../assets/related-product-images/third-product.avif';

// Importing React Hooks
import { useState } from 'react';

// Importing components
import DetailedDescription from './DescriptionTab';
import Specifications from './SpecificationsTab';
import Reviews from './ReviewsTab';

// Importing CSS
import './product_detail.css';
import './screen_shrink.css';
import './animation.css';

function ProductDetail(props) {
    // Cart icon animation
    const [isHovered, setIsHovered] = useState(false);

    const galleryImages = [mainShot, secondShot, thirdShot, fourthShot];

    const [currentImage, setCurrentImage] = useState(galleryImages[0]);

    const [currentQuantity, setCurrentQuantity] = useState(1);

    const increaseQuantity = () => {
        if(currentQuantity < 10) {
            setCurrentQuantity(currentQuantity + 1);
        };
    };

    const decreaseQuantity = () => {
        if(currentQuantity > 1) {
            setCurrentQuantity(currentQuantity - 1);
        };
    };

    // Handling product tab root
    const [activeTab, setActiveTab] = useState('description');

    const renderTabContent = () => {
        switch(activeTab) {
            case 'description':
                return <DetailedDescription />;
            case 'specifications':
                return <Specifications />;
            case 'reviews':
                return <Reviews />;
            default:
                return <DetailedDescription />;
        }
    };

    return (
        <>
            {/* Main content */}
            <main className="main">
                {/* Layout setting */}
                <div className="container three-columns">   {/* 3 columns container */}
                    <aside className="aside-left"></aside>  {/* Aside left */}

                    {/* Actual main content */}
                    <section className="main-content">
                        <nav className="site-nav">
                            <p className="grey-site-path">Trang chủ / sản phẩm <strong className="strong-site-path">/ Cà phê Arabica Ethiopia</strong></p>
                        </nav>

                        {/* Product gallery */}
                        <div className="product-gallery-container">
                            <div className="product-images-container images-container-animation">
                                
                                {/* Main image */}
                                <div className="main-image-container">
                                    <img className="main-image" src={currentImage} alt="Product" />
                                    <div className="product-badge">Bán chạy</div>
                                </div>

                                {/* Sub images */}
                                <div className="sub-images-container">
                                    {galleryImages.map((image, index) => (
                                        <img
                                            className={`sub-image ${currentImage === image ? 'selected-sub-image' : ''}`}
                                            key={index}
                                            src={image}
                                            alt='Sub product'
                                            onClick={() => setCurrentImage(image)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Product informations container */}
                            <div className="product-informations-container informations-container-animation">
                                <h1>Cà phê Arabica Ethiopia</h1>

                                {/* Product review container */}
                                <div className="product-review-container">
                                    {/* Star rating */}
                                    <div className="product-stars">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                    </div>

                                    {/* Rating count */}
                                    <div className="product-review">
                                        <p>4.8 (124 đánh giá)</p>
                                    </div>
                                </div>

                                {/* Product price container */}
                                <div className="product-price-container">
                                {/* Final price */}
                                    <div className="product-pricing product-final-price">
                                        <h2>299.000đ</h2>
                                    </div>

                                    {/* Discounted price */}
                                    <div className="product-pricing product-discounted-price">
                                        <p>350.000đ</p>
                                    </div>

                                    {/* Discount percent */}
                                    <div className="product-pricing product-discounted-percent">
                                        <p>-15%</p>
                                    </div>
                                </div>

                                {/* Product description container */}
                                <div className="product-description-container">
                                    <h4>Mô tả sản phẩm</h4>
                                    <p className="product-description">
                                        Cà phê Arabica Ethiopia đặc biệt với hương vị nhẹ nhàng, thanh mát và notes hoa quả tự nhiên. 
                                        Được trồng trên cao nguyên Ethiopia với độ cao 1500-2000m, mang đến trải nghiệm cà phê tinh tế và đậm đà.
                                    </p>
                                </div>

                                {/* Product specifications container */}
                                <div className="specifications-container">
                                    <h4>Đặc điểm nổi bật</h4>
                                    <ul className="specifications-list">
                                        <li>100% Arabica nguyên chất</li>
                                        <li>Rang tươi mỗi ngày</li>
                                        <li>Hương vị hoa quả thiên nhiên</li>
                                        <li>Độ caffeine vừa phải</li>
                                        <li>Phù hợp pha phin, espresso</li>
                                    </ul>
                                    </div>

                                    {/* Product quantity container */}
                                    <div className="product-quantity-container">
                                    <h5>Số lượng: </h5>

                                    {/* Quantity adjustment function button container */}
                                    <div className="product-quantity-customize-container">
                                        {/* Functional buttons */}

                                        {/* Minus quantity button */}
                                        <button
                                            className={`minus-button ${currentQuantity === 1 ? 'inactive-button' : ''}`}
                                            onClick={decreaseQuantity}>
                                        -</button>
                                        
                                        {/* Displaying current quantity */}
                                        <input 
                                            className={`quantity-count ${currentQuantity === 1 || currentQuantity === 10 ? 'quantity-reached-limit' : ''}`}
                                            type="number" 
                                            value={currentQuantity}
                                        />

                                        {/* Plus quantity button */}
                                        <button 
                                            className={`plus-button ${currentQuantity === 10 ? 'inactive-button': ''}`}
                                            onClick={increaseQuantity}>
                                        +</button>
                                    </div>
                                </div>

                                {/* Call to action buttons container */}
                                <div className="product-cta-buttons-container">

                                    {/* Add to cart button */}
                                    <div className="add-to-cart-button-container">
                                        <button
                                            className="cta-button add-to-cart-button js-add-to-cart-button"
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                        >
                                            <i className={`bi bi-cart cart-icon ${isHovered ? 'cart-icon-animation' : ''}`}></i>
                                            <span className="add-to-cart-text">Thêm vào giỏ</span>
                                        </button>
                                    </div>
                                    
                                    {/* Action button container */}
                                    <div className="action-buttons-container">

                                        {/* Like button */}
                                        <div className="like-button-container">
                                            <button className="cta-button like-button"><i className="bi bi-heart"></i></button>
                                        </div>

                                        {/* Share button */}
                                        <div className="share-button-container">
                                            <button className="cta-button share-button"><i className="bi bi-share"></i></button>
                                        </div>
                                    </div>
                                </div>

                                {/* Buy button container */}
                                <div className="buy-button-container">
                                    <button className="buy-button">Mua ngay</button>
                                </div>

                                {/* Commitment container */}
                                <div className="commitment-container">
                                    {/* Free delivery */}
                                    <div className="free-delivery-container commitment-icon-container">
                                        <i className="bi bi-truck commitment-icon"></i>
                                        <p>Giao hàng miễn phí</p>
                                    </div>

                                    {/* High quality guarantee */}
                                    <div className="guarantee-container commitment-icon-container">
                                        <i className="bi bi-shield commitment-icon"></i>
                                        <p>Bảo hành chất lượng</p>
                                    </div>

                                    {/* Easey return */}
                                    <div className="easy-return-container commitment-icon-container">
                                        <i className="bi bi-arrow-left-circle commitment-icon"></i>
                                        <p>Đổi trả dễ dàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product tabs container (Detailed description, specifications, reviews) */}
                        <div className="product-tabs-container">
                            {/* Navigator section */}
                            <div className="tabs-nav">
                                <button
                                    onClick={() => setActiveTab('description')}
                                    className={`tab-button ${activeTab === 'description' ? 'button-clicked' : ''}`}>
                                    Mô tả chi tiết
                                </button>

                                <button
                                    onClick={() => setActiveTab('specifications')}
                                    className={`tab-button ${activeTab === 'specifications' ? 'button-clicked' : ''}`}>
                                    Thông số kỹ thuật
                                </button>

                                <button
                                    onClick={() => setActiveTab('reviews')}
                                    className={`tab-button ${activeTab === 'reviews' ? 'button-clicked' : ''}`}>
                                    Đánh giá (124)
                                </button>
                            </div>

                            {/* Tab content (For each button above) */}
                            <div className="product-tab-root">
                                {renderTabContent()}
                            </div>
                        </div>

                        {/* Relevant products container */}
                        <div className="related-products-root">
                            {/* The heading */}
                            <h2>Sản phẩm liên quan</h2>

                            {/* Related product card 3 columns grid container */}
                            <div className="related-products-container">
                                {/* Card 1 */}
                                <div className="related-product-card">
                                    {/* Related product image */}
                                    <div className="related-product-image-container">
                                        <img className="related-product-image" src={firstProduct} alt="Related product" />
                                    </div>

                                    <div className="related-product-informations-container">
                                        <div>Cà phê Robusta Đak Lak</div>

                                        {/* Star icons container */}
                                        <div className="related-product-star-container">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>

                                            {/* Rating in number */}
                                            <span>4.6</span>
                                        </div>

                                        <div className="related-product-price-container">
                                            <h2>249.000đ</h2>

                                            {/* Buy button container */}
                                            <div className="related-product-buy-button-container">
                                                <i className="bi bi-cart related-product-cart-icon"></i>
                                                <button className="related-product-buy-button">Mua</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="related-product-card">
                                    {/* Related product image */}
                                    <div className="related-product-image-container">
                                        <img className="related-product-image" src={secondProduct} alt="Related product" />
                                    </div>

                                    <div className="related-product-informations-container">
                                        <div>Blend House Special</div>

                                        {/* Star icons container */}
                                        <div className="related-product-star-container">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>

                                            {/* Rating in number */}
                                            <span>4.9</span>
                                        </div>

                                        <div className="related-product-price-container">
                                            <h2>329.000đ</h2>

                                            {/* Buy button container */}
                                            <div className="related-product-buy-button-container">
                                                <i className="bi bi-cart related-product-cart-icon"></i>
                                                <button className="related-product-buy-button">Mua</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="related-product-card">
                                    {/* Related product image */}
                                    <div className="related-product-image-container">
                                        <img className="related-product-image" src={thirdProduct} alt="Related product" />
                                    </div>

                                    <div className="related-product-informations-container">
                                        <div>Cold Brew Premium</div>

                                        {/* Star icons container */}
                                        <div className="related-product-star-container">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>

                                            {/* Rating in number */}
                                            <span>4.7</span>
                                        </div>

                                        <div className="related-product-price-container">
                                            <h2>189.000đ</h2>

                                            {/* Buy button container */}
                                            <div className="related-product-buy-button-container">
                                                <i className="bi bi-cart related-product-cart-icon"></i>
                                                <button className="related-product-buy-button">Mua</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <aside className="aside-right"></aside> {/* Aside right */}
                </div>
            </main>
        </>
    )
};

export default ProductDetail;