import {Link} from "react-router-dom";

const Nav = () => {
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
      </ul>
    </nav>
  );
};

export default Nav;
