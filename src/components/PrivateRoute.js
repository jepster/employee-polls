import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const PrivateRoute = ({children, loggedIn}) => {
  return loggedIn ? children : <Navigate to={`/`}/>;
};

const mapStateToProps = ({authedUser}) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);
