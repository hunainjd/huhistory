import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo">
          <h1>WhoWho</h1>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#about" className="nav-link">About</a>
        </nav>

        {/* Auth Buttons */}
        <div className="header-actions">
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;