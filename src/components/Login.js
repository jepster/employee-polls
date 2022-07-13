import { connect } from "react-redux";
import {useNavigate} from "react-router-dom";
import { Button } from 'reactstrap';

const Login = ({ dispatch }) => {
  const navigate = useNavigate();
  const setUserSignedIn = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Sign in</h2>
      <form>
        <label>User</label>
        <input type="text" name="user" />
        <label>Password</label>
        <input type="password" name="password" />
        <Button color="danger">Danger!</Button>

        <button className="btn" type="submit" onClick={setUserSignedIn}>
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ userSignedIn }) => ({
  userSignedIn: userSignedIn,
});

export default connect()(Login);
