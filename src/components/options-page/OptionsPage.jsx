import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectedItemsSelector } from "../../store/items.selectors";
import Header from "../header/Header";
import ItemsList from "../items/ItemsList";
import Button from "../buttons/Button";
import "./options-page.scss";

const OptionsPage = ({ selectedItem }) => {
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
        <div className="container">
          <ul className="items">
            {selectedItem.map(item => (
              <ItemsList key={item._id} isOptionals={true} item={item} />
            ))}
          </ul>
        </div>

        <div className="options-footer">
          <div className="footer-text">Total</div>
          <div className="total-price">$ 926.21</div>
        </div>
      </div>
      <Link to="/done">
        <Button type={"Confirm"} />
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedItem: selectedItemsSelector(state)
});

export default connect(mapStateToProps)(OptionsPage);
