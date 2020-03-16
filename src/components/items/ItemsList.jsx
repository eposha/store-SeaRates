import React, { useState, useEffect } from "react";

import "./items.scss";

const ItemsList = ({ isOptionals }) => {
  const [isChecked, onToggleCheck] = useState(false);
  const isBoxShadow = isOptionals ? "" : "box-shadow";

  return (
    <div className="container">
      <ul className="items">
        <li className={`detail ${isBoxShadow}`}>
          <div className="checkbox" onClick={() => onToggleCheck(!isChecked)}>
            <input type="checkbox" onChange={() => {}} checked={isChecked} />
            <label></label>
            <div className="detail__item">
              <div className="detail-to">
                <span className="to">to:</span>
                <span className="to-name"> Rebecca Moore</span>
              </div>
              <div className="detial__date">20 January, 2019</div>
            </div>
          </div>

          {isOptionals ? null : (
            <div className="items-quantity">
              <span className="minus ellipse">-</span>
              <span className="quantity">1</span>
              <span className="plus ellipse">+</span>
            </div>
          )}

          <div className="item-price">
            $ 926.21
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
      </ul>
    </div>
  );
};

export default ItemsList;
