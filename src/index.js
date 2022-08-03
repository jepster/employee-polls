import React from "react";
import App from "./components/AppComponent";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "./store";
import * as ReactDOMClient from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>);
