// Importing related product images
import firstProduct from '../../assets/related-product-images/first-product.avif';
import secondProduct from '../../assets/related-product-images/second-product.avif';
import thirdProduct from '../../assets/related-product-images/third-product.avif';

// Importing Data
import productData from '../../data/products.json';

// Importing React Hooks
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Importing components
import DetailedDescription from './DescriptionTab';
import Specifications from './SpecificationsTab';
import Reviews from './ReviewsTab';

// Importing CSS Modules and other CSS files
import styles from './product_detail.module.css';
import animationStyles from './animation.module.css';
import './screen_shrink.css';

function ProductDetail(props) {
     // Increase & Decrease quantity
    const increaseQuantity = () => {
        if (currentQuantity < 10) {
            setCurrentQuantity(currentQuantity + 1);
        };
    };

    const decreaseQuantity = () => {
        if (currentQuantity > 1) {
            setCurrentQuantity(currentQuantity - 1);
        };
    };

    // Handling product tab root
    const [activeTab, setActiveTab] = useState('description');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'description':
                return <DetailedDescription styles={styles} />;
            case 'specifications':
                return <Specifications styles={styles} />;
            case 'reviews':
                return <Reviews styles={styles} />;
            default:
                return <DetailedDescription styles={styles} />;
        }
    };

    const renderPrice = (price) => {
        const fixedPrice = price.toFixed(3);

        return `${fixedPrice}đ`;
    }

    // Cart icon animation
    const [isHovered, setIsHovered] = useState(false);

    // const [currentImage, setCurrentImage] = useState(galleryImages[0]);

    const [currentQuantity, setCurrentQuantity] = useState(1);

    // useParams
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        const foundProduct = productData.find(p => p.id === id);

        if(foundProduct) {
            setProduct(foundProduct);
            setCurrentImage(foundProduct.productDetail.mainImage);
        } else {
            console.error(`Product ${id} not found`);
        }
    }, [id]);

    if(!product) {
        return (
            <div>Loading...</div>
        )
    }

    const details = product.productDetail;

    return (
        <>
            {/* Main content */}
            <main className={styles.main}>
                {/* Layout setting */}
                <div className={`${styles['product-detail-container']} ${styles['three-columns']}`}> {/* 3 columns container */}
                    <aside className={styles['aside-left']}></aside> {/* Aside left */}

                    {/* Actual main content */}
                    <section className={styles['product-detail-main-content']}>
                        <nav className={styles['site-nav']}>
                            <p className={styles['grey-site-path']}>Trang chủ / sản phẩm <strong className={styles['strong-site-path']}>/ Cà phê Arabica Ethiopia</strong></p>
                        </nav>

                        {/* Product gallery */}
                        <div className={styles['product-gallery-container']}>
                            <div className={`${styles['product-images-container']} ${styles['images-container-animation']}`}>

                                {/* Main image */}
                                <div className={styles['main-image-container']}>
                                    <img className={styles['main-image']} src={currentImage} alt="Product" />
                                    {/* Badge tag */}
                                    <div className={styles['product-badge']}>{product.badgeTag}</div>
                                </div>

                                {/* Sub images */}
                                <div className={styles['sub-images-container']}>
                                    {details.subImages.map((image, index) => (
                                        <img
                                            className={`${styles['sub-image']} ${currentImage === image ? styles['selected-sub-image'] : ''}`}
                                            onClick={() => setCurrentImage(image)}
                                            key={index}
                                            src={image}
                                            alt='Sub thumbnail'
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Product informations container */}
                            <div className={`${styles['product-informations-container']} ${styles['informations-container-animation']}`}>
                                {/* Product name */}
                                <h1>{product.name}</h1>

                                {/* Product review container */}
                                <div className={styles['product-review-container']}>
                                    {/* Star rating */}
                                    <div className={styles['product-stars']}>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                    </div>

                                    {/* Rating count */}
                                    <div className={styles['product-review']}>
                                        <p>4.8 ({product.reviews.count} đánh giá)</p>
                                    </div>
                                </div>

                                {/* Product price container */}
                                <div className={styles['product-price-container']}>
                                    {/* Final price */}
                                    <div className={`${styles['product-pricing']} ${styles['product-final-price']}`}>
                                        <h2>{renderPrice(product.price)}</h2>
                                    </div>

                                    {/* Discounted price */}
                                    <div className={`${styles['product-pricing']} ${styles['product-discounted-price']}`}>
                                        <p>{renderPrice(product.discountedPrice)}</p>
                                    </div>

                                    {/* Discount percent */}
                                    <div className={`${styles['product-pricing']} ${styles['product-discounted-percent']}`}>
                                        <p>-15%</p>
                                    </div>
                                </div>

                                {/* Product description container */}
                                <div className={styles['product-description-container']}>
                                    <h4>Mô tả sản phẩm</h4>
                                    <p className={styles['product-description']}>
                                        Cà phê Arabica Ethiopia đặc biệt với hương vị nhẹ nhàng, thanh mát và notes hoa quả tự nhiên.
                                        Được trồng trên cao nguyên Ethiopia với độ cao 1500-2000m, mang đến trải nghiệm cà phê tinh tế và đậm đà.
                                    </p>
                                </div>

                                {/* Product specifications container */}
                                <div className={styles['specifications-container']}>
                                    <h4>Đặc điểm nổi bật</h4>
                                    <ul className={styles['specifications-list']}>
                                        <li>{details.highlightsList[0]}</li>
                                        <li>{details.highlightsList[1]}</li>
                                        <li>{details.highlightsList[2]}</li>
                                        <li>{details.highlightsList[3]}</li>
                                        <li>{details.highlightsList[4]}</li>
                                    </ul>
                                </div>

                                {/* Product quantity container */}
                                <div className={styles['product-quantity-container']}>
                                    <h5>Số lượng: </h5>

                                    {/* Quantity adjustment function button container */}
                                    <div className={styles['product-quantity-customize-container']}>
                                        {/* Functional buttons */}
                                        {/* Minus quantity button */}
                                        <button
                                            className={`${styles['minus-button']} ${currentQuantity === 1 ? styles['inactive-button'] : ''}`}
                                            onClick={decreaseQuantity}>
                                            -</button>

                                        {/* Displaying current quantity */}
                                        <input
                                            className={`${styles['quantity-count']} ${currentQuantity === 1 || currentQuantity === 10 ? styles['quantity-reached-limit'] : ''}`}
                                            type="number"
                                            value={currentQuantity}
                                            readOnly
                                        />

                                        {/* Plus quantity button */}
                                        <button
                                            className={`${styles['plus-button']} ${currentQuantity === 10 ? styles['inactive-button'] : ''}`}
                                            onClick={increaseQuantity}>
                                            +</button>
                                    </div>
                                </div>

                                {/* Call to action buttons container */}
                                <div className={styles['product-cta-buttons-container']}>

                                    {/* Add to cart button */}
                                    <div className={styles['add-to-cart-button-container']}>
                                        <button
                                            className={`${styles['cta-button']} ${styles['add-to-cart-button']} ${styles['js-add-to-cart-button']}`}
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                        >
                                            <i className={`bi bi-cart ${styles['cart-icon']} ${isHovered ? animationStyles['cart-icon-animation'] : ''}`}></i>
                                            <span className={styles['add-to-cart-text']}>Thêm vào giỏ</span>
                                        </button>
                                    </div>

                                    {/* Action button container */}
                                    <div className={styles['action-buttons-container']}>

                                        {/* Like button */}
                                        <div className={styles['like-button-container']}>
                                            <button className={`${styles['cta-button']} ${styles['like-button']}`}><i className="bi bi-heart"></i></button>
                                        </div>

                                        {/* Share button */}
                                        <div className={styles['share-button-container']}>
                                            <button className={`${styles['cta-button']} ${styles['share-button']}`}><i className="bi bi-share"></i></button>
                                        </div>
                                    </div>
                                </div>

                                {/* Buy button container */}
                                <div className={styles['buy-button-container']}>
                                    <button className={styles['buy-button']}>Mua ngay</button>
                                </div>

                                {/* Commitment container */}
                                <div className={styles['commitment-container']}>
                                    {/* Free delivery */}
                                    <div className={`${styles['free-delivery-container']} ${styles['commitment-icon-container']}`}>
                                        <i className={`bi bi-truck ${styles['commitment-icon']}`}></i>
                                        <p>Giao hàng miễn phí</p>
                                    </div>

                                    {/* High quality guarantee */}
                                    <div className={`${styles['guarantee-container']} ${styles['commitment-icon-container']}`}>
                                        <i className={`bi bi-shield ${styles['commitment-icon']}`}></i>
                                        <p>Bảo hành chất lượng</p>
                                    </div>

                                    {/* Easy return */}
                                    <div className={`${styles['easy-return-container']} ${styles['commitment-icon-container']}`}>
                                        <i className={`bi bi-arrow-left-circle ${styles['commitment-icon']}`}></i>
                                        <p>Đổi trả dễ dàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product tabs container (Detailed description, specifications, reviews) */}
                        <div className={styles['product-tabs-container']}>
                            {/* Navigator section */}
                            <div className={styles['tabs-nav']}>
                                <button
                                    onClick={() => setActiveTab('description')}
                                    className={`${styles['tab-button']} ${activeTab === 'description' ? styles['button-clicked'] : ''}`}>
                                    Mô tả chi tiết
                                </button>

                                <button
                                    onClick={() => setActiveTab('specifications')}
                                    className={`${styles['tab-button']} ${activeTab === 'specifications' ? styles['button-clicked'] : ''}`}>
                                    Thông số kỹ thuật
                                </button>

                                <button
                                    onClick={() => setActiveTab('reviews')}
                                    className={`${styles['tab-button']} ${activeTab === 'reviews' ? styles['button-clicked'] : ''}`}>
                                    Đánh giá (124)
                                </button>
                            </div>

                            {/* Tab content (For each button above) */}
                            <div className={styles['product-tab-root']}>
                                {renderTabContent()}
                            </div>
                        </div>

                        {/* Relevant products container */}
                        <div className={styles['related-products-root']}>
                            {/* The heading */}
                            <h2>Sản phẩm liên quan</h2>

                            {/* Related product card 3 columns grid container */}
                            <div className={styles['related-products-container']}>
                                {/* Card 1 */}
                                <div className={styles['related-product-card']}>
                                    {/* Related product image */}
                                    <div className={styles['related-product-image-container']}>
                                        <img className={styles['related-product-image']} src={firstProduct} alt="Related product" />
                                    </div>

                                    <div className={styles['related-product-informations-container']}>
                                        <div>Cà phê Robusta Đak Lak</div>

                                        {/* Star icons container */}
                                        <div className={styles['related-product-star-container']}>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>

                                            {/* Rating in number */}
                                            <span>4.6</span>
                                        </div>

                                        <div className={styles['related-product-price-container']}>
                                            <h2>249.000đ</h2>

                                            {/* Buy button container */}
                                            <div className={styles['related-product-buy-button-container']}>
                                                <i className={`bi bi-cart ${styles['related-product-cart-icon']}`}></i>
                                                <button className={styles['related-product-buy-button']}>Mua</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className={styles['related-product-card']}>
                                    {/* Related product image */}
                                    <div className={styles['related-product-image-container']}>
                                        <img className={styles['related-product-image']} src={secondProduct} alt="Related product" />
                                    </div>

                                    <div className={styles['related-product-informations-container']}>
                                        <div>Blend House Special</div>

                                        {/* Star icons container */}
                                        <div className={styles['related-product-star-container']}>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>

                                            {/* Rating in number */}
                                            <span>4.9</span>
                                        </div>

                                        <div className={styles['related-product-price-container']}>
                                            <h2>329.000đ</h2>

                                            {/* Buy button container */}
                                            <div className={styles['related-product-buy-button-container']}>
                                                <i className={`bi bi-cart ${styles['related-product-cart-icon']}`}></i>
                                                <button className={styles['related-product-buy-button']}>Mua</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className={styles['related-product-card']}>
                                    {/* Related product image */}
                                    <div className={styles['related-product-image-container']}>
                                        <img className={styles['related-product-image']} src={thirdProduct} alt="Related product" />
                                    </div>

                                    <div className={styles['related-product-informations-container']}>
                                        <div>Cold Brew Premium</div>

                                        {/* Star icons container */}
                                        <div className={styles['related-product-star-container']}>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>

                                            {/* Rating in number */}
                                            <span>4.7</span>
                                        </div>

                                        <div className={styles['related-product-price-container']}>
                                            <h2>189.000đ</h2>

                                            {/* Buy button container */}
                                            <div className={styles['related-product-buy-button-container']}>
                                                <i className={`bi bi-cart ${styles['related-product-cart-icon']}`}></i>
                                                <button className={styles['related-product-buy-button']}>Mua</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <aside className={styles['aside-right']}></aside> {/* Aside right */}
                </div>
            </main>
        </>
    )
};

export default ProductDetail;