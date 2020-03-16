import React from "react";
import Header from "../header/Header";
import ItemsList from "../items/ItemsList";
import Button from "../buttons/Button";

const StartPage = () => {
  return (
    <section className="start-page page">
      <Header type={"price"} />
      <ItemsList />
      <Button type={"Buy"} />
    </section>
  );
};

export default StartPage;
