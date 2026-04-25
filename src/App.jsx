import React from 'react';
import './index.css';

function App() {
  return (
    <div className="hero-container">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="video-bg"
      >
        <source src="/assets/aMrf9JGU3yYdb6750VEo3fjjEY.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for depth */}
      <div className="overlay"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">GRADIX™</div>
        <div className="nav-location">
          Based in: <span>Los Angeles, USA</span>
        </div>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">For Brands</a>
            <a href="#">For Creators</a>
            <a href="#">Contact</a>
          </div>
          <div className="menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="hero-content">
        <h1 className="hero-title">
          <div className="title-row row-1">
            <span className="gradient-text">Brand</span>
          </div>
          <div className="title-row row-amp">
            <span className="amp">&</span>
          </div>
          <div className="title-row row-2">
            <span className="gradient-text">Creators</span>
          </div>
        </h1>
      </main>

      {/* Hero Footer */}
      <footer className="hero-footer">
        <div className="footer-left">
          <div className="star">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
          <p>
            We turn bold ideas into standout brands and sleek websites. 
            Let's bring your vision to life.
          </p>
          <div className="copyright">© 2026 Gradix creative agency</div>
        </div>

        <div className="footer-right">
          <div className="services-list">
            <div className="service-item">
              <span className="index">(01)</span> Brand identity design
            </div>
            <div className="service-item">
              <span className="index">(02)</span> Framer development
            </div>
            <div className="service-item">
              <span className="index">(03)</span> UI/UX strategy
            </div>
            <div className="service-item">
              <span className="index">(04)</span> Creative campaigns
            </div>
          </div>
          
          <a href="#" className="cta-button">
            Let's work together
            <span className="arrow">→</span>
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
