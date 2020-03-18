import React, { useState } from "react";
import { connect } from "react-redux";
import * as itemAction from "../../store/items.actions";
import * as itemsGateway from "./itemsGateway";
import moment from "moment";
import "./items.scss";
import { itemsListSelector } from "../../store/items.selectors";

const ItemsList = ({
  isOptionals,
  item,
  allItems,
  setAllItems,
  setTotalPrice
}) => {
  const [isChecked, onToggleCheck] = useState(false);
  const isBoxShadow = isOptionals ? "" : "box-shadow";

  const quantity = item.quantity ? item.quantity : 1;
  const price = (quantity * +item.price.slice(1)).toFixed(2);
  setTotalPrice(itemsGateway.totalPrice(allItems));

  return (
    <li className={`detail ${isBoxShadow}`}>
      <div className="wrapper-checkbox">
        <div
          className="checkbox"
          onClick={() => {
            onToggleCheck(!isChecked);
            setAllItems(
              itemsGateway.updateItemsList(
                allItems,
                item._id,
                itemsGateway.setChecked,
                !isChecked,
                item
              )
            );
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

      {isOptionals ? null : (
        <div className="items-quantity">
          <button
            className="minus ellipse"
            onClick={() =>
              setAllItems(
                itemsGateway.updateItemsList(
                  allItems,
                  item._id,
                  itemsGateway.setQuntity,
                  -1,
                  item
                )
              )
            }
            disabled={+quantity === 1 ? true : !isChecked}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            className="plus ellipse"
            onClick={() =>
              setAllItems(
                itemsGateway.updateItemsList(
                  allItems,
                  item._id,
                  itemsGateway.setQuntity,
                  1,
                  item
                )
              )
            }
            disabled={!isChecked}
          >
            +
          </button>
        </div>
      )}

      <div className="item-price">
        {`$${price}`}
        {isOptionals ? null : (
          <div className="item__additional-services">
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.87934 0.238643L9.7747 5.42386C10.0751 5.74205 10.0751 6.25794 9.7747 6.57614L4.87934 11.7614C4.57894 12.0795 4.09189 12.0795 3.79149 11.7614C3.49108 11.4432 3.49108 10.9273 3.79149 10.6091L7.37368 6.81478L0 6.81478L0 5.18522L7.37368 5.18522L3.79149 1.39091C3.49108 1.07272 3.49108 0.556834 3.79149 0.238643C4.09189 -0.0795478 4.57894 -0.0795478 4.87934 0.238643Z"
                fill="#613EEA"
              />
            </svg>
          </div>
        )}
      </div>
    </li>
  );
};

const mapStateToProps = state => ({
  allItems: itemsListSelector(state)
});

export default connect(mapStateToProps, itemAction)(ItemsList);
