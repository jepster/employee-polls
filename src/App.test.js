import {render} from '@testing-library/react';
import App from './components/App';
import {BrowserRouter as Router, BrowserRouter} from "react-router-dom";
import {store} from "./store";
import {Provider} from "react-redux";
import Login from "./components/Login";
import '@testing-library/jest-dom'
import {addVote} from "./actions/voteAction";

describe("App", () => {

  it('should render the component', () => {
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

  it('check if we have login form', () => {
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

  it('Check if we have polls in initial state data', () => {
    render(<Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>);

    expect(store.getState().polls).toBeDefined();
  });

  it('Check if we can add multiple items to the votes state', () => {
    render(<Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>);
    expect(store.getState().votes).toBeDefined();

    store.dispatch(addVote(
      {
        id: '123',
      }));
    expect(store.getState().votes.votes[0].id).toBe('123');

    store.dispatch(addVote(
      {
        id: '456',
      }
    ));
    expect(store.getState().votes.votes[1].id).toBe('456');
  });

});
