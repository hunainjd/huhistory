import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
      
        <div className="header-logo">
          <h1>LHOK</h1>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#contact-us" className="nav-link">Contact Us</a>
          <a href="#community" className="nav-link">Available Professionals</a>
          <a href="#about" className="nav-link">AboutUs</a>
        </nav>

        {/* Auth Buttons */}
        <div className="header-actions">
          <button className="btn-secondary">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;