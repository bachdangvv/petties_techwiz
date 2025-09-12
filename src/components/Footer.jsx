import styles from "./HeaderFooter/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerContent}>
        {/* About Us */}
        <div className={`${styles.footerCol} ${styles.aboutUs}`}>
          <h4>FurEver Care</h4>
          <p>
            High-quality pet accessory sales and care services. Bringing you the
            safest and best experience in sending and caring for pets.
          </p>
          <div className={styles.socialIcons}>
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
        <div className={`${styles.footerCol} ${styles.quickLinks}`}>
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
        <div className={`${styles.footerCol} ${styles.customerSupport}`}>
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
        <div className={`${styles.footerCol} ${styles.newsletter}`}>
          <h4>Newsletter</h4>
          <p>
            Sign up to receive promotional information and the latest products.
          </p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Email" />
            <button type="submit" className={styles.subscribeButton}>
              Register
            </button>
          </div>
          <div className={styles.contactInfo}>
            <p><i className="fas fa-phone-alt"></i> 0123 456 789</p>
            <p><i className="fas fa-envelope"></i> info@furevercare.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 ABC Address, New York</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>&copy; Copyright © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
