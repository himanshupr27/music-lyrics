import React from 'react';
import '../../css/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h3>EchoMist 🎧</h3>
          <p>Bringing lyrics to life, one song at a time.</p>
        </div>
        <div className="footer-right">
          <a href="mailto:contact@echomist.com" target="_blank" rel="noopener noreferrer">📧 Mail</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} EchoMist. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
