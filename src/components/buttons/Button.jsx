import React from "react";
import "./button.scss";

const Button = ({ type }) => {
  return (
    <div className="container">
      <button className="btn-buy btn">{type}</button>
    </div>
  );
};

export default Button;
