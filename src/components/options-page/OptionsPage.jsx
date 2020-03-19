import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  additionalItemsSelector,
  totalPriceSelector,
  finalOrderSelector
} from "../../store/items.selectors";
import Header from "../header/Header";
import ItemsListAdditional from "../items/ItemsListAdditional";
import Button from "../buttons/Button";
import "./options-page.scss";

const OptionsPage = ({
  additionalItems,
  totalPrice,
  additionalPrice,
  finalOrder
}) => {
  const fullPrice = !additionalPrice
    ? totalPrice
    : totalPrice + additionalPrice;
  return (
    <div className="options-page page">
      <Header totalPrice={false} />
      <div className="container">
        <div className="options-dscr">
          <div className="options-price">{`$${totalPrice}`}</div>
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
      <Link to="/done">
        <Button type={"Confirm"} />
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  additionalItems: additionalItemsSelector(state),
  totalPrice: totalPriceSelector(state),
  finalOrder: finalOrderSelector(state)
});

export default connect(mapStateToProps)(OptionsPage);
