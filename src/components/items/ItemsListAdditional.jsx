import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { setOrder } from "./itemsGateway";
import {
  additionalItemsSelector,
  finalOrderSelector,
  mainPriceSelector
} from "../../store/items.selectors";
import * as itemsAction from "../../store/items.actions";
import "./items.scss";

const ItemsListAdditional = ({
  item,
  idx,
  selectedItem,
  finalOrder,
  setFinalOrder,
  mainPrice
}) => {
  const [isChecked, onToggleCheck] = useState(false);
  const price = +item.price.slice(1);

  useEffect(() => {
    const copyfinalOrder = Object.assign({}, finalOrder);
    copyfinalOrder.mainItems = selectedItem;
    copyfinalOrder.finalPrice = mainPrice;
    setFinalOrder(copyfinalOrder);
  }, []);

  return (
    <li className="detail box-shadow">
      <div className="wrapper-checkbox">
        <div
          className="checkbox"
          onClick={() => {
            onToggleCheck(!isChecked);
            setFinalOrder(setOrder(selectedItem, item._id, idx, finalOrder));
          }}
        >
          <input type="checkbox" onChange={() => {}} checked={isChecked} />
          <label></label>
        </div>
        <div className="detail__item">
          <div className="detail-to">
            <span className="to">to:</span>
            <span className="to-name"> {item.name}</span>
          </div>
          <div className="detial__date">
            {moment(item.date).format("YYYY-MMMM")}
          </div>
        </div>
      </div>

      <div className="item-price">{`$${price}`}</div>
    </li>
  );
};

const mapStateToProps = state => ({
  finalOrder: finalOrderSelector(state),
  selectedItem: additionalItemsSelector(state),
  mainPrice: mainPriceSelector(state)
});

export default connect(mapStateToProps, itemsAction)(ItemsListAdditional);
