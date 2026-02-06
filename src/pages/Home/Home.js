import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Welcome to ProfileHub</h1>
          <p className="hero-subtitle">
            Connect with professionals and showcase your expertise
          </p>
          <div className="hero-actions">
            <button className="btn-primary-large">Get Started</button>
            <button className="btn-secondary-large">Learn More</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose ProfileHub?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎯 Professional Profiles</h3>
              <p>Showcase your skills and experience with customizable profiles</p>
            </div>
            <div className="feature-card">
              <h3>🤝 Connect & Network</h3>
              <p>Build meaningful connections with professionals in your field</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Secure & Private</h3>
              <p>Your data is protected with enterprise-level security</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;