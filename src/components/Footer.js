import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Links */}
        <div className="footer-column">
          <h3>Links</h3>
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#shows" className="footer-link">
            Shows
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/horsebackstunts"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/blizzardbartoszgadziomski?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>
            Email:{" "}
            <a href="mailto:example@example.com" className="contact-link">
              example@example.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+123456789" className="contact-link">
              +1 234 567 89
            </a>
          </p>
          <p></p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>
          &copy; 2024 Bartosz Gadziomski's Horse Stunt Shows. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
