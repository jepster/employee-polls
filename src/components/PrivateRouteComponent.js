import {Navigate} from "react-router-dom";
import {store} from "../store";

const PrivateRouteComponent = ({children, loggedIn}) => {
  const state = store.getState()
  return state.authedUser ? children : <Navigate to={`/login`}/>;
};

export default PrivateRouteComponent;
