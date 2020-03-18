import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartPage from "./components/start-page/StartPage";
import OptionsPage from "./components/options-page/OptionsPage";
import DonePage from "./components/done-page/DonePage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={StartPage} />
        <Route path="/options" component={OptionsPage} />
        <Route path="/done" component={DonePage} />
      </Router>
    </Provider>
  );
};

export default App;
