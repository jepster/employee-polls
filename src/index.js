 import {configureStore} from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { combineReducers } from 'redux'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
 import logger from "./middleware/logger";
const reducer = combineReducers({
  // here we will be adding reducers
})
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(logger)
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
