import {Fragment} from "react";
import {connect, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPoll from "./NewPoll";
import Poll from "./Poll";
import PrivateRoute from "./PrivateRoute";

const App = ({dispatch}) => {
  return (
    <Fragment>
      <div className="container">
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/dashboard" exact element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/new-poll" exact element={<PrivateRoute><NewPoll/></PrivateRoute>}/>
          <Route path="/poll/:id" exact element={<PrivateRoute><Poll/></PrivateRoute>}/>
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null
});

export default connect(mapStateToProps)(App);
