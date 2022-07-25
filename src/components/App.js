import {Fragment} from "react";
import {connect} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import {handleInitialPollsData} from "../actions/handleInitialPollsData";
import Dashboard from "./Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPoll from "./NewPoll";
import Poll from "./Poll";

const App = ({dispatch}) => {
  dispatch(handleInitialPollsData());


  return (
    <Fragment>
      <div className="container">
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/dashboard" exact element={<Dashboard/>}/>
          <Route path="/new-poll" exact element={<NewPoll/>}/>
          <Route path="/poll/:id" exact element={<Poll/>}/>
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
