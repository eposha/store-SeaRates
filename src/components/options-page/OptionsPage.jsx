import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  additionalItemsSelector,
  mainPriceSelector,
  finalOrderSelector
} from "../../store/items.selectors";
import Header from "../header/Header";
import ItemsListAdditional from "../items/ItemsListAdditional";
import Button from "../buttons/Button";
import "./options-page.scss";

const OptionsPage = ({
  additionalItems,
  mainPrice,
  additionalPrice,
  finalOrder
}) => {
  const fullPrice = !additionalPrice ? mainPrice : mainPrice + additionalPrice;
  return (
    <div className="options-page page">
      <Header totalPrice={false} />
      <div className="container">
        <div className="options-dscr">
          <div className="options-price">{`$${mainPrice}`}</div>
          <span className="options-text">Price by main items</span>
        </div>
        <div className="container">
          <ul className="items">
            {additionalItems.map((item, idx) =>
              item.additional.map(additional => (
                <ItemsListAdditional
                  key={additional._id}
                  item={additional}
                  idx={idx}
                  selectedItem={item}
                />
              ))
            )}
          </ul>
        </div>

        <div className="options-footer">
          <div className="footer-text">Total</div>
          <div className="total-price">{`$ ${
            finalOrder.finalPrice === 0
              ? fullPrice
              : finalOrder.finalPrice.toFixed(2)
          }`}</div>
        </div>
      </div>
      <Link to="/done" style={{ textDecoration: "none" }}>
        <Button type={"Confirm"} />
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  additionalItems: additionalItemsSelector(state),
  mainPrice: mainPriceSelector(state),
  finalOrder: finalOrderSelector(state)
});

export default connect(mapStateToProps)(OptionsPage);
