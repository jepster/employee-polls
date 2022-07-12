import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import {handleInitialData} from "../actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        hi!
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Login />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
