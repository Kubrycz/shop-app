import React from "react";
import "../SCSS/components/Footer.scss";
import "../SCSS/pages/HomeContainer.scss";
import "../SCSS/variables/fonts.scss";
import Section from "./Section";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="background-light">
      <Section>
        <div className="footer-container">
          {/* -------essense section----------- */}
          <div>
            <h3 className="footer-description">ESSENCE</h3>
            <p className="small-description">
              Luxury perfumes inspired by natural elements, crafted with care
              and attention to detail.
            </p>
            <div className="footer-socials">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          {/* -----------shop section---------- */}
          <div>
            <h2 className="footer-other-desc">Shop</h2>
            <ul className="footer-list">
              <li>
                <a href="#" className="small-description">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="small-description">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="small-description">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="small-description">
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>
          {/* -------About Section----------- */}
          <div>
            <h2 className="footer-other-desc">About</h2>
            <ul className="footer-list">
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Ingredients</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
          {/* ----------Customer Care Section---------- */}
          <div>
            <h2 className="footer-other-desc">Customer Care</h2>
            <ul className="footer-list">
              <li>
                <button
                  type="button"
                  className="unstyled-button"
                  onClick={() => {
                    console.log("klikniete");
                    navigate("/contact");
                  }}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button type="button" className="unstyled-button">
                  Shipping & Returns
                </button>
              </li>
              <li>
                <button type="button" className="unstyled-button">
                  FAQs
                </button>
              </li>
              <li>
                <button type="button" className="unstyled-button">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* ...............footer bottom----------- */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 ESSENCE. All rights reserved.</p>
          <div className="footer-payments">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-apple-pay"></i>
          </div>
        </div>
      </Section>
    </div>
  );
};
export default Footer;
