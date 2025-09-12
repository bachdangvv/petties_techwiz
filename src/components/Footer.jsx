export default function Footer() {
    
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* About Us */}
        <div className="footer-col about-us">
          <h4>FurEver Care</h4>
          <p>
            High-quality pet accessory sales and care services. Bringing you the safest and best experience in sending and caring for pets.
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
          <h4>Links</h4>
          <ul>
            <li><a href="#">Homepage</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-col customer-support">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="#">Delivery policy</a></li>
            <li><a href="#">Return policy</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter">
          <h4>Newsletter</h4>
          <p>Sign up to receive promotional information and the latest products.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button type="submit" className="subscribe-button">
              Register
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
        <p>&copy; Copyright © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
