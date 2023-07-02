import React from "react";
import '../style/Footer.css';
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-social">
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 PYPRO Community</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;