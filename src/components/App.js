import {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPoll from "./NewPoll";
import Poll from "./Poll";
import PrivateRoute from "./PrivateRoute";
import {handleInitialData} from "../actions/shared";
import Leaderboard from "./Leaderboard";

const App = ({dispatch, authedUser}) => {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <Fragment>
      <div className="container">

        {authedUser ? <Nav/> : ''}

        <Routes>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/" exact element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/new-poll" exact element={<PrivateRoute><NewPoll/></PrivateRoute>}/>
          <Route path="/poll/:id" exact element={<PrivateRoute><Poll/></PrivateRoute>}/>
          <Route path="/leaderboard" exact element={<PrivateRoute><Leaderboard/></PrivateRoute>}/>
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({authedUser}) => ({
  authedUser: authedUser,
});

export default connect(mapStateToProps)(App);
