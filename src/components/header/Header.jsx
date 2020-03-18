import React from "react";
import "./header.scss";

const Header = ({ totalPrice }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div src="#" className="logo" />
          <div className="total-price">{totalPrice}</div>
          <div className="burger-menu">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
