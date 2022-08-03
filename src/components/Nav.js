import {Link} from "react-router-dom";
// import {logout} from "../actions/authedUserAction";
import {useDispatch} from "react-redux";

const Nav = () => {

  const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logout());
  // }

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Leaderboard</Link>
        </li>
        <li>
          <Link to="/new-poll">New poll</Link>
        </li>
        {/*<li>*/}
        {/*  <Link to="/" onClick={handleLogout}>Logout</Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
};

export default Nav;
