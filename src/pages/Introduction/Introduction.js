// Importing components
import DeploymentTimeline from './sub-components/DeploymentTimeline';
import IntroductionFooter from './sub-components/IntroductionFooter';

// Importing images
import HomeImage from '../../assets/home-image.png';
import firstImage from '../../assets/signature-products-images/first-product.avif';
import secondImage from '../../assets/signature-products-images/second-product.avif';
import thirdImage from '../../assets/signature-products-images/third-product.avif';
import fourthImage from '../../assets/signature-products-images/fourth-product.avif';
import JackMa from '../../assets/leaders/jack-ma.webp';
import JeffBezos from '../../assets/leaders/jeff-bezos.webp';
import Faker from '../../assets/leaders/faker.webp';

// Importing React Hooks


// Importing utils


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
                        <i className="bi bi-award accomplishment-icon"></i>
                        <h1>15+</h1>
                        <p>Năm kinh nghiệm</p>
                    </div>

                    <div className='store-accomplishment'>
                        <i className="bi bi-people-fill accomplishment-icon"></i>
                        <h1>10,000+</h1>
                        <p>Khách hàng hài lòng</p>
                    </div>

                    <div className='store-accomplishment'>
                        <i className="bi bi-cup-hot accomplishment-icon"></i>
                        <h1>500+</h1>
                        <p>Tấn cà phê/năm</p>
                    </div>

                    <div className='store-accomplishment'>
                        <i className="bi bi-globe accomplishment-icon"></i>
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
                                        alt='Signature product'
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
                            {/* The Heading container */}
                            <div className='core-values-heading-container'>
                                <h1>Giá trị cốt lõi</h1>
                                <p>Những giá trị định hướng mọi hoạt động của Coffee Premium</p>
                            </div>

                            {/* The container of values (4 cards) */}
                            <div className='value-cards-container'>
                                {/* Card 1 */}
                                <div className='value-card'>
                                    <i className="bi bi-cup-hot value-icon"></i>    {/*Value icon */}
                                    <h3>Chất lượng tuyệt đối</h3>
                                    <p>
                                        Cam kết mang đến những sản phẩm cà phê chất lượng cao nhất, 
                                        từ khâu tuyển chọn đến chế biến
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className='value-card'>
                                    <i className="bi bi-heart value-icon"></i>      {/*Value icon */}
                                    <h3>Đam mê cà phê</h3>
                                    <p>
                                        Tiều yêu dành cho cà phê là động lực thức đẩy chúng tôi không 
                                        ngừng sáng tạo và hoàn thiện
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className='value-card'>
                                    <i className="bi bi-people value-icon"></i>     {/*Value icon */}
                                    <h3>Khách hàng là trọng tâm</h3>
                                    <p>
                                        Luôn đặt sự hài lòng của khách hàng lên hàng đầu trong mọi 
                                        hoạt động kinh doanh
                                    </p>
                                </div>

                                {/* Card 4 */}
                                <div className='value-card'>
                                    <i className="bi bi-leaf value-icon"></i>       {/*Value icon */}
                                    <h3>Bền vững môi trường</h3>
                                    <p>
                                        Cam kết bảo vệ môi trường thông qua các hoạt động sản xuất 
                                        và kinh doanh bền vững
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Leader team container */}
                        <div className='leader-team-container'>
                            {/* Leader team heading container */}
                            <div className='leader-team-heading-container'>
                                <h1>Đội ngũ lãnh đạo</h1>
                                <p>Những con người tài năng đứng sau thành công của Coffee Premium</p>
                            </div>

                            {/* Leader cards container (3 cards) */}
                            <div className='leader-cards-container'>
                                {/* Card 1 */}
                                <div className='leader-card'>
                                    <img src={JackMa} alt='Jack Ma' />          {/* Profile Image */}
                                    <h3>Jack Ma</h3>
                                    <div className='role-badge'>Founder & CEO</div>
                                    <p>
                                        Với 20 năm kinh nghiệm trong ngành cà phê, ông Jack Ma đã 
                                        dẫn dắt Coffee Premium trở thành thương hiệu uy tín
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className='leader-card'>
                                    <img src={Faker} alt='Faker' />             {/* Profile Image */}
                                    <h3>Faker</h3>
                                    <div className='role-badge'>Head of Quality</div>
                                    <p>
                                        Chuyên gia rang xay với 15 năm kinh nghiệm, đảm bảo mỗi batch 
                                        cà phê đều đạt chất lượng tuyệt đối
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className='leader-card'>
                                    <img src={JeffBezos} alt='Jeff Bezos' />    {/* Profile Image */}
                                    <h3>Jeff Bezos</h3>
                                    <div className='role-badge'>Head of Operation</div>
                                    <p>
                                        Quản lý toàn bộ chuỗi cung ứng và đảm bảo sản phẩm đến tay 
                                        khách hàng nhanh chóng, chất lượng
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Deployment journey container */}
                        <div className='deployment-journey-container'>
                            {/* Deployment journey heading container */}
                            <div className='deployment-journey-heading-container'>
                                <h1>Hành trình phát triển</h1>
                                <p>Những cột mốc quan trọng trong lịch sử Coffee Premium</p>
                            </div>

                            {/* Deployment journey timeline */}
                            {/* This will contains a component of timeline */}
                            <DeploymentTimeline />
                        </div>
                    </section>

                    {/* Aside right */}
                    <aside className='aside-right'></aside>
                </div>
            </main>

            {/* The Footer */}
            {/* The Footer component was imported */}
            <footer className='introduction-footer'>
                <IntroductionFooter />
            </footer>
        </>
    )
};