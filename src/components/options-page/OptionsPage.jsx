import React from "react";
import Header from "../header/Header";
import ItemsList from "../items/ItemsList";
import Button from "../buttons/Button";
import "./options-page.scss";

const OptionsPage = () => {
  return (
    <div className="options-page page">
      <Header />
      <div className="container">
        <div className="options-dscr">
          <div className="options-price">$ 926</div>
          <span className="options-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </span>
        </div>

        <ItemsList isOptionals={true} />

        <div className="options-footer">
          <div className="footer-text">Total</div>
          <div className="total-price">$ 926.21</div>
        </div>
      </div>
      <Button type={"Confirm"} />
    </div>
  );
};

export default OptionsPage;
