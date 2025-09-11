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
    if (!product || !product.productDetail) return null;

        switch (activeTab) {
            case 'description':
                return <DetailedDescription styles={styles} data={product.productDetail.detailedDescription} />;
            case 'specifications':
                return <Specifications styles={styles} />;
            case 'reviews':
                return <Reviews styles={styles} />;
            default:
                return <DetailedDescription styles={styles} data={product.productDetail.detailedDescription} />;
        }
    };

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
                            <p className={styles['grey-site-path']}>Trang chủ / sản phẩm <strong className={styles['strong-site-path']}>/ {product.name} </strong></p>
                        </nav>

                        {/* Product gallery */}
                        <div className={styles['product-gallery-container']}>
                            <div className={`${styles['product-images-container']} ${animationStyles['images-container-animation']}`}>

                                {/* Main image */}
                                <div className={styles['main-image-container']}>
                                    <img className={styles['main-image']} src={currentImage} alt="Product" />
                                    {/* Badge tag */}
                                    <div className={styles['product-badge']}>{product.badgeTag}</div>
                                </div>

                                {/* Sub images */}
                                <div className={styles['sub-images-container']}>
                                    
                                </div>
                            </div>

                            {/* Product informations container */}
                            <div className={`${styles['product-informations-container']} ${animationStyles['informations-container-animation']}`}>
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
                                        <p>{product.reviews.stars} ({product.reviews.count} feedback)</p>
                                    </div>
                                </div>

                                {/* Product price container */}
                                <div className={styles['product-price-container']}>
                                    {/* Final price */}
                                    <div className={`${styles['product-pricing']} ${styles['product-final-price']}`}>
                                        <h2>{product.price.toFixed(3)}$</h2>
                                    </div>

                                    {/* Discounted price */}
                                    <div className={`${styles['product-pricing']} ${styles['product-discounted-price']}`}>
                                        {/* <p>{product.discountedPrice.toFixed(3)}</p> */}
                                        {typeof product.discountedPrice === 'number' && (
                                            <del className="discounted-price">
                                                {product.discountedPrice.toFixed(3)} $
                                            </del>
                                        )}
                                    </div>
                                </div>

                                {/* Product description container */}
                                <div className={styles['product-description-container']}>
                                    <h4>Description</h4>
                                    <p className={styles['product-description']}>
                                        {product.productDetail.description}
                                    </p>
                                </div>

                                {/* Product specifications container */}
                                <div className={styles['specifications-container']}>
                                    <h4>Outstanding features</h4>
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
                                    <h5>Quantity: </h5>

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
                                            {/* <i className={`bi bi-cart ${styles['cart-icon']} ${isHovered ? animationStyles['cart-icon-animation'] : ''}`}></i> */}
                                            <span className={styles['add-to-cart-text']}>Add to cart</span>
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
                                    <button className={styles['buy-button']}>Buy now</button>
                                </div>

                                {/* Commitment container */}
                                <div className={styles['commitment-container']}>
                                    {/* Free delivery */}
                                    <div className={`${styles['free-delivery-container']} ${styles['commitment-icon-container']}`}>
                                        <i className={`bi bi-truck ${styles['commitment-icon']}`}></i>
                                        <p>Free ship</p>
                                    </div>

                                    {/* High quality guarantee */}
                                    <div className={`${styles['guarantee-container']} ${styles['commitment-icon-container']}`}>
                                        <i className={`bi bi-shield ${styles['commitment-icon']}`}></i>
                                        <p>Quality warranty</p>
                                    </div>

                                    {/* Easy return */}
                                    <div className={`${styles['easy-return-container']} ${styles['commitment-icon-container']}`}>
                                        <i className={`bi bi-arrow-left-circle ${styles['commitment-icon']}`}></i>
                                        <p>Easy returns</p>
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
                                    Detail description
                                </button>

                                <button
                                    onClick={() => setActiveTab('specifications')}
                                    className={`${styles['tab-button']} ${activeTab === 'specifications' ? styles['button-clicked'] : ''}`}>
                                    Technical specifications
                                </button>

                                <button
                                    onClick={() => setActiveTab('reviews')}
                                    className={`${styles['tab-button']} ${activeTab === 'reviews' ? styles['button-clicked'] : ''}`}>
                                    Feedback (124)
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
                            <h2>Related products</h2>

                            {/* Related product card 3 columns grid container */}
                            <div className={styles['related-products-container']}>
                                {/* Card 1 */}
                                <div className={styles['related-product-card']}>
                                    {/* Related product image */}
                                    <div className={styles['related-product-image-container']}>
                                        <img className={styles['related-product-image']} src="/pet-images/pet-pro6.jpg" alt="Related product" />
                                    </div>

                                    <div className={styles['related-product-informations-container']}>
                                        <div>Reflective Harness & Leash</div>

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
                                            <h2>24.00$</h2>

                                            {/* Buy button container */}
                                            <div className={styles['related-product-buy-button-container']}>
                                                <i className={`bi bi-cart ${styles['related-product-cart-icon']}`}></i>
                                                <button className={styles['related-product-buy-button']}>Buy</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className={styles['related-product-card']}>
                                    {/* Related product image */}
                                    <div className={styles['related-product-image-container']}>
                                        <img className={styles['related-product-image']} src="/pet-images/pet-pro5.jpg" alt="Related product" />
                                    </div>

                                    <div className={styles['related-product-informations-container']}>
                                        <div>Portable Metal Pet Cage (L)</div>

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
                                            <h2>89.00$</h2>

                                            {/* Buy button container */}
                                            <div className={styles['related-product-buy-button-container']}>
                                                <i className={`bi bi-cart ${styles['related-product-cart-icon']}`}></i>
                                                <button className={styles['related-product-buy-button']}>Buy</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className={styles['related-product-card']}>
                                    {/* Related product image */}
                                    <div className={styles['related-product-image-container']}>
                                        <img className={styles['related-product-image']} src="/pet-images/pet-pro4.jpg" alt="Related product" />
                                    </div>

                                    <div className={styles['related-product-informations-container']}>
                                        <div>Anti-Shed Pet Shampoo</div>

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
                                            <h2>12.99$</h2>

                                            {/* Buy button container */}
                                            <div className={styles['related-product-buy-button-container']}>
                                                <i className={`bi bi-cart ${styles['related-product-cart-icon']}`}></i>
                                                <button className={styles['related-product-buy-button']}>Buy</button>
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