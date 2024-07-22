import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; // Make sure you have a corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Beavers Plumbing</h2>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/pages/contact">Contact</Link>
          <Link to="/pages/order">Services</Link>
          {/* Add more links as needed */}
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Beavers Plumbing. All rights reserved.</p>
          <p>1234 Plumbing Lane, Pipeville, USA</p>
          <p>Email: contact@beaversplumbing.com | Phone: (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
