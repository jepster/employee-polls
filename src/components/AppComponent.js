import {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Login from "./LoginComponent";
import NavComponent from "./NavComponent";
import Dashboard from "./DashboardComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPoll from "./NewPollComponent";
import Poll from "./PollComponent";
import PrivateRoute from "./PrivateRouteComponent";
import {handleInitialData} from "../actions/shared";
import Leaderboard from "./LeaderboardComponent";
import {store} from "../store";

const AppComponent = () => {
  useEffect(() => {
    store.dispatch(handleInitialData());
  });

  const state = store.getState()

  return (
    <Fragment>
      <div className="container">

        {state.authedUser ? <NavComponent/> : ''}

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

export default AppComponent;
