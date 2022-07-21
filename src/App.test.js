import { render, screen } from '@testing-library/react';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import {Provider} from "react-redux";

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

});
