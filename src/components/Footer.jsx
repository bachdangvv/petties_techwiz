export default function Footer() {
    
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* About Us */}
        <div className="footer-col about-us">
          <h4>Coffee Premium</h4>
          <p>
            Cà phê chất lượng cao, rang xay tươi mỗi ngày. Mang đến cho bạn trải
            nghiệm cà phê tuyệt vời nhất.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Youtube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col quick-links">
          <h4>Liên kết nhanh</h4>
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-col customer-support">
          <h4>Hỗ trợ khách hàng</h4>
          <ul>
            <li><a href="#">Chính sách giao hàng</a></li>
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Điều khoản sử dụng</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter">
          <h4>Nhận bản tin</h4>
          <p>Đăng ký để nhận thông tin khuyến mãi và sản phẩm mới nhất.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email của bạn" />
            <button type="submit" className="subscribe-button">
              Đăng ký
            </button>
          </div>
          <div className="contact-info">
            <p><i className="fas fa-phone-alt"></i> 0123 456 789</p>
            <p><i className="fas fa-envelope"></i> info@coffeepremium.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 Đường ABC, Quận 1, TP.HCM</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Coffee Premium. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
}
