import React from "react";
import "../SCSS/components/RecomendationSection.scss";
import "../SCSS/pages/HomeContainer.scss";

const Footer = () => {
  return (
    <div className="background-light">
      <div className="product-grid product-grid--footer">
        <h3>ESSENCE</h3>
        <p>
          Luxury perfumes inspired by natural elements, crafted with care and
          attention to detail.
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

        <div className="product-grid product-grid--footer">
          <h3>Shop</h3>
          <ul>
            <div className="">
              <li>
                <a href="#">All Products</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Gift Sets</a>
              </li>
            </div>
          </ul>
        </div>

        <div className="product-grid product-grid--footer">
          <h3>About</h3>
          <ul className="">
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

        <div className="product-grid product-grid--footer">
          <h3>Customer Care</h3>
          <ul className="">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="product-grid product-grid--footer">
        <p className="footer-copy">© 2025 ESSENCE. All rights reserved.</p>
        <div className="footer-payments">
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-amex"></i>
          <i className="fab fa-cc-paypal"></i>
          <i className="fab fa-cc-apple-pay"></i>
        </div>
      </div>
    </div>
  );
};
export default Footer;
