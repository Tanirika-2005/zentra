import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="bottom-cta-section">
        <div className="container">
          <div className="footer-cta">
            <h2 className="footer-title">See what your team could learn this week.</h2>
            <div className="footer-actions">
              <a href="#demo" className="btn-primary">Book demo</a>
              <p className="cta-note">30 minutes. We'll run a live study with you, show you the output, and answer every question on your list. No commitments. Bring your skepticism, we'll address it.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="dark-footer">
        <div className="container dark-footer-layout">
          <div className="dark-footer-left">
            <h3 className="dark-footer-brand">Mudivu</h3>
            <p className="dark-footer-copy">© 2026 Mudivu Inc. All rights reserved.</p>
          </div>
          <div className="dark-footer-right">
            <a href="#" className="social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="social-btn" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>
            <a href="#" className="social-btn" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
