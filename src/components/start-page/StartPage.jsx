import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  itemsListSelector,
  mainPriceSelector
} from "../../store/items.selectors";
import * as itemsAction from "../../store/items.actions";
import Header from "../header/Header";
import ItemsList from "../items/ItemsList";
import Button from "../buttons/Button";

const StartPage = ({ allItems, getAllItems, mainPrice }) => {
  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <section className="start-page page">
      <Header totalPrice={mainPrice} />
      <div className="container">
        <ul className="items">
          {allItems.map(item => (
            <ItemsList key={item._id} item={item} />
          ))}
        </ul>
      </div>
      <Link to="/options" style={{ textDecoration: "none" }}>
        <Button type={"Buy"} />
      </Link>
    </section>
  );
};

const setStateToProps = state => ({
  allItems: itemsListSelector(state),
  mainPrice: mainPriceSelector(state)
});

export default connect(setStateToProps, itemsAction)(StartPage);
