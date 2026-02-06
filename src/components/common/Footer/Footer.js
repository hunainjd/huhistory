import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top Section */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>ProfileHub</h3>
            <p className="footer-description">
              Connect with professionals and showcase your expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#twitter" className="social-icon">Twitter</a>
              <a href="#linkedin" className="social-icon">LinkedIn</a>
              <a href="#github" className="social-icon">GitHub</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} ProfileHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;