import React from "react";
import "./header.scss";

const Header = ({ totalPrice }) => {
  const totalSum = !totalPrice ? "" : `$${totalPrice}`;
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo" />
          <div className="total-price">{totalSum}</div>
          <div className="burger-menu">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
