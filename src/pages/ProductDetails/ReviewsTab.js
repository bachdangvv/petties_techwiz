// Importing reviewers profile picture
import DonaldTrump from '../../assets/reviewers/donald-trump.jpg';
import Rosie from '../../assets/reviewers/rosie.jpg';
import ElonMusk from '../../assets/reviewers/elon-musk.jpg';

export default function Reviews() {
    return (
        <div className="review-tab-details">
            {/* Review overall container (Left side) */}
            <div className="review-overall-container">
                <div className="review-heading-container">
                        <p>Tổng quan đánh giá</p>
                </div>

                <div className="total-review-numbering">
                    <h1>4.8</h1>

                    {/* Star icons */}
                    <div>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>

                    <p>124 đánh giá</p>
                </div>

                {/* Star chart container */}
                <div className="stars-rating-bar-container">
                    <div className="rating-row">
                        <span>5</span>

                        <i className="bi bi-star-fill overall-rating-star-icon"></i>

                        <div className="statistic-bar-container">
                            <div className="statistic-bar" style={{ width: '65%' }}></div>
                        </div>

                        <p className="rating-percentage">65%</p>
                    </div>
                </div>

                <div className="stars-rating-bar-container">
                    <div className="rating-row">
                        <span>4</span>

                        <i className="bi bi-star-fill overall-rating-star-icon"></i>

                        <div className="statistic-bar-container">
                            <div className="statistic-bar" style={{ width: '25%' }}></div>
                        </div>
                        
                        <p className="rating-percentage">25%</p>
                    </div>
                </div>

                <div className="stars-rating-bar-container">
                    <div className="rating-row">
                        <span>3</span>

                        <i className="bi bi-star-fill overall-rating-star-icon"></i>

                        <div className="statistic-bar-container">
                            <div className="statistic-bar" style={{ width: '7%' }}></div>
                        </div>
                        
                        <p className="rating-percentage">7%</p>
                    </div>
                </div>

                <div className="stars-rating-bar-container">
                    <div className="rating-row">
                        <span>2</span>

                        <i className="bi bi-star-fill overall-rating-star-icon"></i>

                        <div className="statistic-bar-container">
                            <div className="statistic-bar" style={{ width: '2%' }}></div>
                        </div>
                        
                        <p className="rating-percentage">2%</p>
                    </div>
                </div>

                <div className="stars-rating-bar-container">
                    <div className="rating-row">
                        <span>1</span>

                        <i className="bi bi-star-fill overall-rating-star-icon"></i>

                        <div className="statistic-bar-container">
                            <div className="statistic-bar" style={{ width: '1%' }}></div>
                        </div>
                        
                        <p className="rating-percentage js-percentage">1%</p>
                    </div>
                </div>
            </div>

            {/* Review comment container */}
            <div className="review-comments-container">

                {/* Comment card */}
                <div className="comment-card-container">
                    {/* User profile image */}
                    <div className="profile-image-container">
                        <img src={DonaldTrump} alt="User profile picture"/>
                    </div>

                    {/* Comment content container */}
                    <div className="comment-content-container">
                        {/* User name */}
                        <div className="user-name-badge">
                            <h4>Donald Trump</h4>

                            <span className="verified-badge">Đã xác minh</span>
                        </div>

                        {/* Star icons */}
                        <div className="comment-rating-container">
                            {/* Star container */}
                            <div>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>

                            <span>15/12/2024</span>
                        </div>

                        {/* User comment */}
                        <p className="user-comment">
                            Cà phê rất ngon, hương vị đậm đà và thơm. Rang tươi, chất lượng tuyệt vời. Sẽ mua lại!
                        </p>
                    </div>
                </div>

                {/* Comment card */}
                <div className="comment-card-container">
                    {/* User profile image */}
                    <div className="profile-image-container">
                        <img src={Rosie} alt="User profile picture"/>
                    </div>

                    {/* Comment content container */}
                    <div className="comment-content-container">
                        {/* User name */}
                        <div className="user-name-badge">
                            <h4>Rosie Blackpink</h4>

                            <span className="verified-badge">Đã xác minh</span>
                        </div>

                        {/* Star icons */}
                        <div className="comment-rating-container">
                            {/* Star container */}
                            <div>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>

                            <span>12/12/2024</span>
                        </div>

                        {/* User comment */}
                        <p className="user-comment">
                            Cà phê khá ngon, hương vị nhẹ nhàng. Giao hàng nhanh, đóng gói cẩn thận.
                        </p>
                    </div>
                </div>

                {/* Comment card */}
                <div className="comment-card-container">
                    {/* User profile image */}
                    <div className="profile-image-container">
                        <img src={ElonMusk} alt="User profile picture"/>

                    </div>

                    {/* Comment content container */}
                    <div className="comment-content-container">
                        {/* User name */}
                        <div className="user-name-badge">
                            <h4>Elon Musk</h4>

                            <span className="verified-badge">Đã xác minh</span>
                        </div>

                        {/* Star icons */}
                        <div className="comment-rating-container">
                            {/* Star container */}
                            <div>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>

                            <span>10/12/2024</span> 
                        </div>

                        {/* User comment */}
                        <p className="user-comment">
                            Tuyệt vời! Đây là loại cà phê tôi đã tìm kiếm. Hương vị cân bằng, không quá đắng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};