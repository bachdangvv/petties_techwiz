function Contact(){
    return (
        <section className="contact-section page-enter">
            <div className="contact-header">
                <h2>Liên hệ với chúng tôi</h2>
                <p>Hãy để lại thông tin để chúng tôi có thể hỗ trợ bạn một cách tốt nhất</p>
            </div>

            <div className="contact-form-section">
                <div className="section-header">
                    <h2>Gửi tin nhắn cho chúng tôi</h2>
                    <p>Điền thông tin dưới đây và chúng tôi sẽ phản hồi trong vòng 24h</p>
                    <form className="contact-form">
                        <div className="form-group-row">
                            <div className="form-group">
                                <label htmlFor="fullName">Họ và tên *</label>
                                <input type="text" id="fullName" placeholder="Nhập họ và tên" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Số điện thoại</label>
                                <input type="tel" id="phoneNumber" placeholder="Nhập số điện thoại" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" placeholder="Nhập địa chỉ email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Chủ đề</label>
                            <input type="text" id="subject" placeholder="Nhập chủ đề" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Nội dung *</label>
                            <textarea id="message" placeholder="Nhập nội dung tin nhắn..." required></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            <i className="fas fa-envelope"></i>
                            Gửi tin nhắn
                        </button>
                    </form>
                </div>
                <div className="right-side">    
                    <div className="section-header2">
                        <h2>Tìm chúng tôi tại</h2>
                        <div className="map-container"> <img src="../coffeeadr.jpg" alt="Ảnh nền" className="map-background-img"/>
                            <div className="map-placeholder">
                                <div className="map-info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p>Coffee Premium</p>
                                    <span>123 Nguyễn Huệ, Q1, TP.HCM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-header3">
                        <div className="first-section">
                            <h3>Câu hỏi thường gặp</h3>
                            <p>Những câu hỏi phổ biến từ khách hàng</p>
                        </div>

                        <div className="ques-section">
                            <div className="ques-item">
                                <h4>Làm thế nào để đặt hàng online?</h4>
                                <p>Bạn có thể dễ dàng đặt hàng qua website hoặc gọi điện trực tiếp đến hotline của chúng tôi.</p>
                            </div>
                            <div className="ques-item">
                                <h4>Thời gian giao hàng là bao lâu?</h4>
                                <p>Chúng tôi giao hàng trong vòng 1-2 ngày làm việc tại TP.HCM và 2-5 ngày cho các tỉnh khác.</p>
                            </div>
                            <div className="ques-item">
                                <h4>Có chính sách đổi trả không?</h4>
                                <p>Chúng tôi hỗ trợ đổi trả trong vòng 7 ngày nếu sản phẩm có lỗi từ nhà sản xuất.</p>
                            </div>
                            <div className="ques-item">
                                <h4>Có ship toàn quốc không?</h4>
                                <p>Có, chúng tôi giao hàng toàn quốc với phí ship hợp lý.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="support-section">
                    <h3 className="support-title">Cần hỗ trợ khẩn cấp?</h3>
                    <p className="support-subtitle">Gọi ngay hotline để được hỗ trợ nhanh chóng</p>
                <div className="support-actions">
                    <a href="tel:0123456789" className="support-button call-button">
                        <i className="fas fa-phone-alt"></i> Gọi ngay: 0123 456 789
                    </a>
                    <a href="mailto:info@coffeepremium.com" className="support-button email-button">
                        <i className="fas fa-envelope"></i> Email: info@coffeepremium.com
                    </a>
                </div>
            </div>
        </section>
    )
};
export default Contact;