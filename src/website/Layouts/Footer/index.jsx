import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

import iconImage from "../../Assets/image/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="container-xxl footer-bg-section">
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <img src={iconImage} alt="Icon" className="footer-icon" />
            <p>
              your all-in-one business contact
              <br /> management solution. Effortlessly organize,
              <br /> share, and stay connected with clients and colleagues.
              <br /> Join us in transforming professional networking.
            </p>
            <div className="socials-margin">
              <h3 className="mb-3">contact@diskuss.in | +91 8792976734 </h3>
              <div className="social-icons">
                <span className="me-3">
                  <a href="https://www.facebook.com/ ">
                    <FaFacebook />
                  </a>
                </span>
                <span className="me-3">
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </span>
                <span className="me-3">
                  <a href="https://www.instagram.com/ ">
                    <FaInstagram />
                  </a>
                </span>
                <span>
                  <a href="https://www.twitter.com/ ">
                    <FaTwitter />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-2 mb-4 mb-md-0">
            <h3 className="mb-3 footer-links-name">Navigation</h3>
            <ul>
              <li className="mb-2">
                <Link to="features">Features</Link>
              </li>
              <li className="mb-2">
                <Link to="pricing">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link to="about-us">About us</Link>
              </li>
              <li className="mb-2">
                <Link to="contact">Contact us</Link>
              </li>
              {/* <li className="mb-2">
                <Link to="/">Support</Link>
              </li> */}
            </ul>
          </div>

          <div className="col-md-2 mb-4 mb-md-0">
            <h3 className="mb-3 footer-links-name">Quick links</h3>
            <ul>
              <li className="mb-2">
                <Link to="terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li className="mb-2">
                <Link to="privacy-policy">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="cancellation-policy">Cancellation and Refund Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="shipping-policy">Shipping and Delivery Policy</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <div className="available-store">
              <h2>Download App</h2>
              <div className="d-flex gap-4">
                <div className="google-playstore">
                  <div className="icon-store">
                    <FaGooglePlay />
                  </div>
                  <div className="content-store">
                    <span>Get it On</span>
                    <h4>Google play</h4>
                  </div>
                </div>
                <div className="apple-store">
                  <div className="icon-store">
                    <FaApple />
                  </div>
                  <div className="content-store">
                    <span>Download On the</span>
                    <h4>App Store</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="newsletter mt-3">
              <h2 className="newsletter-heading">Subscribe Newsletter</h2>
              <p className="newsletter-subheading">
                Be the first to receive all latest posts in your inbox
              </p>
              <div className="d-flex news-body">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  <span role="img" aria-label="send">
                    <IoIosSend />
                  </span>
                </button>
              </div>
              <p className="newsletter-agreement">
                By clicking send link you agree to receive messages.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom container mt-5 d-flex justify-content-between align-items-center">
        <p className="footer-copyright mb-0">
          © 2024 Diskuss. All rights reserved.
        </p>
        <p className="footer-powered mb-0">Powered by Levontechno</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
