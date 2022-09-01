import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutAuthedUser} from "../slices/authedUserSlice";
import {store} from "../store";

const NavComponent = () => {

  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/new-poll">New poll</Link>
        </li>
        <li>
          <Link to="/" onClick={() => {dispatch(store.dispatch(logoutAuthedUser()))}}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
