import DonaldTrump from '../../assets/reviewers/donald-trump.jpg';
import Rosie from '../../assets/reviewers/rosie.jpg';
import ElonMusk from '../../assets/reviewers/elon-musk.jpg';

// Nhận `styles` object từ props
export default function Reviews({ styles }) {
    return (
        <div className={styles['review-tab-details']}>
            {/* Review overall container (Left side) */}
            <div className={styles['review-overall-container']}>
                <div className={styles['review-heading-container']}>
                    <p>Tổng quan đánh giá</p>
                </div>

                <div className={styles['total-review-numbering']}>
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
                <div className={styles['stars-rating-bar-container']}>
                    <div className={styles['rating-row']}>
                        <span>5</span>
                        <i className={`bi bi-star-fill ${styles['overall-rating-star-icon']}`}></i>
                        <div className={styles['statistic-bar-container']}>
                            <div className={styles['statistic-bar']} style={{ width: '65%' }}></div>
                        </div>
                        <p className={styles['rating-percentage']}>65%</p>
                    </div>
                </div>

                <div className={styles['stars-rating-bar-container']}>
                    <div className={styles['rating-row']}>
                        <span>4</span>
                        <i className={`bi bi-star-fill ${styles['overall-rating-star-icon']}`}></i>
                        <div className={styles['statistic-bar-container']}>
                            <div className={styles['statistic-bar']} style={{ width: '25%' }}></div>
                        </div>
                        <p className={styles['rating-percentage']}>25%</p>
                    </div>
                </div>

                <div className={styles['stars-rating-bar-container']}>
                    <div className={styles['rating-row']}>
                        <span>3</span>
                        <i className={`bi bi-star-fill ${styles['overall-rating-star-icon']}`}></i>
                        <div className={styles['statistic-bar-container']}>
                            <div className={styles['statistic-bar']} style={{ width: '7%' }}></div>
                        </div>
                        <p className={styles['rating-percentage']}>7%</p>
                    </div>
                </div>

                <div className={styles['stars-rating-bar-container']}>
                    <div className={styles['rating-row']}>
                        <span>2</span>
                        <i className={`bi bi-star-fill ${styles['overall-rating-star-icon']}`}></i>
                        <div className={styles['statistic-bar-container']}>
                            <div className={styles['statistic-bar']} style={{ width: '2%' }}></div>
                        </div>
                        <p className={styles['rating-percentage']}>2%</p>
                    </div>
                </div>

                <div className={styles['stars-rating-bar-container']}>
                    <div className={styles['rating-row']}>
                        <span>1</span>
                        <i className={`bi bi-star-fill ${styles['overall-rating-star-icon']}`}></i>
                        <div className={styles['statistic-bar-container']}>
                            <div className={styles['statistic-bar']} style={{ width: '1%' }}></div>
                        </div>
                        <p className={`${styles['rating-percentage']} ${styles['js-percentage']}`}>1%</p>
                    </div>
                </div>
            </div>

            {/* Review comment container */}
            <div className={styles['review-comments-container']}>

                {/* Comment card */}
                <div className={styles['comment-card-container']}>
                    {/* User profile image */}
                    <div className={styles['profile-image-container']}>
                        <img src={DonaldTrump} alt="User profile"/>
                    </div>

                    {/* Comment content container */}
                    <div className={styles['comment-content-container']}>
                        {/* User name */}
                        <div className={styles['user-name-badge']}>
                            <h4>Donald Trump</h4>
                            <span className={styles['verified-badge']}>Đã xác minh</span>
                        </div>

                        {/* Star icons */}
                        <div className={styles['comment-rating-container']}>
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
                        <p className={styles['user-comment']}>
                            Cà phê rất ngon, hương vị đậm đà và thơm. Rang tươi, chất lượng tuyệt vời. Sẽ mua lại!
                        </p>
                    </div>
                </div>

                {/* Comment card */}
                <div className={styles['comment-card-container']}>
                    {/* User profile image */}
                    <div className={styles['profile-image-container']}>
                        <img src={Rosie} alt="User profile"/>
                    </div>

                    {/* Comment content container */}
                    <div className={styles['comment-content-container']}>
                        {/* User name */}
                        <div className={styles['user-name-badge']}>
                            <h4>Rosie Blackpink</h4>
                            <span className={styles['verified-badge']}>Đã xác minh</span>
                        </div>

                        {/* Star icons */}
                        <div className={styles['comment-rating-container']}>
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
                        <p className={styles['user-comment']}>
                            Cà phê khá ngon, hương vị nhẹ nhàng. Giao hàng nhanh, đóng gói cẩn thận.
                        </p>
                    </div>
                </div>

                {/* Comment card */}
                <div className={styles['comment-card-container']}>
                    {/* User profile image */}
                    <div className={styles['profile-image-container']}>
                        <img src={ElonMusk} alt="User profile"/>
                    </div>

                    {/* Comment content container */}
                    <div className={styles['comment-content-container']}>
                        {/* User name */}
                        <div className={styles['user-name-badge']}>
                            <h4>Elon Musk</h4>
                            <span className={styles['verified-badge']}>Đã xác minh</span>
                        </div>

                        {/* Star icons */}
                        <div className={styles['comment-rating-container']}>
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
                        <p className={styles['user-comment']}>
                            Tuyệt vời! Đây là loại cà phê tôi đã tìm kiếm. Hương vị cân bằng, không quá đắng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};