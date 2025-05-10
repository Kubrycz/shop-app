import React from "react";
import "../SCSS/components/Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container">
        <div className="logo" onClick={() => navigate("/home")}>
          ESSENCE
        </div>
        <div className="nav">
          <div className="link" onClick={() => navigate("/shop")}>
            Shop
          </div>
          <div className="link" onClick={() => navigate("/about")}>
            About
          </div>
          <div className="link" onClick={() => navigate("/contact")}>
            Contact
          </div>
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
