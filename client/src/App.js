import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";

import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./components/routing/Routes";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
