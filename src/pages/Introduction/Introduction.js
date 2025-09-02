// Importing components

// Importing images
import HomeImage from '../../assets/home-image.png';
import firstImage from '../../assets/signature-products-images/first-product.avif';
import secondImage from '../../assets/signature-products-images/second-product.avif';
import thirdImage from '../../assets/signature-products-images/third-product.avif';
import fourthImage from '../../assets/signature-products-images/fourth-product.avif';

// Importing React Hooks
import { useState, useEffect } from 'react';

// Importing utils
import useFetchData from './utils/get-data';

// Importing CSS
import './introduction.css';
import './introduction-layout.css';
import './introduction-screen-shrink.css';

export default function Introduction(props) {
    return (
        <>
            {/* Main content */}
            <main className='main'>
                {/* Home image container */}
                <div className='home-image-container'>
                    {/* Home image */}
                    <img className='home-image' src={HomeImage} alt='Welcome to our website' />

                    <div className='home-welcome-message-container'>
                        {/* Welcome message */}
                        <h1>Câu chuyện của Coffee Premium</h1>
                        <p>Hành trình 15 năm kiến tạo hương vị cà phê tuyệt vời</p>
                    </div>
                </div>

                {/* Accomplishment container */}
                <div className='store-accomplishments-container'>
                    {/* Accomplishment (4 accomplishments) */}
                    <div className='store-accomplishment'>
                        <i class="bi bi-award accomplishment-icon"></i>
                        <h1>15+</h1>
                        <p>Năm kinh nghiệm</p>
                    </div>

                    <div className='store-accomplishment'>
                        <i class="bi bi-people-fill accomplishment-icon"></i>
                        <h1>10,000+</h1>
                        <p>Khách hàng hài lòng</p>
                    </div>

                    <div className='store-accomplishment'>
                        <i class="bi bi-cup-hot accomplishment-icon"></i>
                        <h1>500+</h1>
                        <p>Tấn cà phê/năm</p>
                    </div>

                    <div className='store-accomplishment'>
                        <i class="bi bi-globe accomplishment-icon"></i>
                        <h1>50+</h1>
                        <p>Tỉnh thành phủ sóng</p>
                    </div>
                </div>

                {/* Layout setting */}
                <div className='container three-columns'>
                    {/* Aside left */}
                    <aside className='aside-left'></aside>

                    {/* Grid Responsive Main Content */}
                    <section className='main-content'>

                        {/* Company founding story & signature products images container */}
                        <div className='company-summarization-container'>
                            {/* Founding story container */}
                            <div className='founding-story-container'>
                                {/* The founding story contains a heading, 3 paragraphs and 'Learn More' button */}

                                {/* The story heading */}
                                <h1>Câu chuyện thành lập</h1>

                                {/* Paragraph 1 */}
                                <p>
                                    Coffee Premium ra đời từ tình yêu dành cho cà phê và khát vọng mang đến cho người Việt Nam những ly cà phê chất lượng cao nhất. Bắt đầu từ một cửa hàng nhỏ tại TP.HCM năm 2009, chúng tôi đã không ngừng phát triển và trở thành một trong những thương hiệu cà phê uy tín hàng đầu Việt Nam.
                                </p>

                                {/* Paragraph 2 */}
                                <p>
                                    Với triết lý "Chất lượng tạo nên thương hiệu", chúng tôi luôn đặt chất lượng sản phẩm lên hàng đầu. Mỗi hạt cà phê đều được tuyển chọn kỹ lưỡng từ những vùng trồng cà phê nổi tiếng, qua quy trình rang xay hiện đại để mang đến hương vị tuyệt vời nhất.
                                </p>

                                {/* Paragraph 3 */}
                                <p>
                                    Hôm nay, Coffee Premium tự hào phục vụ hơn 10,000 khách hàng trên toàn quốc và tiếp tục mở rộng để mang cà phê Việt Nam ra thế giới.
                                </p>

                                <button className='learn-more-button'>Tìm hiểu thêm</button>
                            </div>

                            {/* Signature products images container */}
                            <div className='signature-products-images-container'>

                                {/* Images in left side will be placed higher than the right side */}

                                {/* Left side (2 images) */}
                                <div className='left-side-container'>
                                    <img
                                        src={firstImage}
                                        className='signature-product-image'
                                        alt='Signature product'
                                    />

                                    <img
                                        src={secondImage}
                                        className='signature-product-image'
                                        alt='Signature product'
                                    />
                                </div>
                                
                                {/* Right side (2 images) */}
                                <div className='right-side-container'>
                                    <img
                                        src={thirdImage}
                                        className='signature-product-image'
                                        alt='Signature producte'
                                    />

                                    <img
                                        src={fourthImage}
                                        className='signature-product-image'
                                        alt='Signature product'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Core values container */}
                        <div className='core-values-container'>
                            {/* The Heading */}
                            <h1>Giá trị cốt lõi</h1>
                            <p>Những giá trị định hướng mọi hoạt động của Coffee Premium</p>

                            {/* The container of values (4 cards) */}
                            <div className='value-card-container'>

                            </div>
                        </div>
                    </section>

                    {/* Aside right */}
                    <aside className='aside-right'></aside>
                </div>
            </main>
        </>
    )
};