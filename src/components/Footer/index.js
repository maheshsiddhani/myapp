import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="contact" >
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Katha</h2>
          <p>
            Discover timeless, handcrafted jewelry that tells your story. Made
            with love, inspired by tradition, and designed for the modern soul.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61571013885377" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/katha_jewellers/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Katha. All Rights Reserved.</p>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
