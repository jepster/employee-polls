import {getByText, render, screen} from '@testing-library/react';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import {Provider} from "react-redux";
import Login from "./components/Login";
import '@testing-library/jest-dom'

describe("App", () => {

  it("should render the component", () => {
    let component;
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("check if we have login form", () => {
    let component;
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login/>
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component.getByText('User')).toBeInTheDocument();
    expect(component.getByText('Password (insert any you like)')).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

});
