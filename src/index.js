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
// Working example for configureStore: https://codesandbox.io/s/redux-toolkit-configurestore-listener-middleware-forking-m7lduu?from-embed=&file=/src/store.js:1111-1214
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
