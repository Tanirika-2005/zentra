import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          {/* Using a text logo as placeholder */}
          <span className="logo-text">Mudivu</span>
        </a>


        <div className="navbar-actions">

          <a href="#demo" className="btn-primary">Book demo</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
