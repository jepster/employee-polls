import {Link} from "react-router-dom";
import {handleLogout} from "../actions/authedUserAction";
import {useDispatch} from "react-redux";

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
          <Link to="/" onClick={dispatch(handleLogout)}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
