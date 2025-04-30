import React from "react";
import "../SCSS/components/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">ESSENCE</div>
        <div className="nav">
          <div className="link">Shop</div>
          <div className="link">About</div>
          <div className="link">Contact</div>
          <div />
          <button className="icon">
            <i className="fas fa-search" />
          </button>
          <button className="icon">
            <i className="fas fa-shopping-bag" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
