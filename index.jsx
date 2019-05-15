import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";

import App from "./src/app";
import { reducers } from "./src/State";

const store = createStore(reducers); // createStore(reducers, applyMiddleware(middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
