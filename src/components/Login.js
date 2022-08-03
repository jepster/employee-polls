import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {Button} from 'reactstrap';
import {useState} from "react";
import {handleLogin} from "../actions/authedUserAction";

const Login = ({dispatch, authedUser}) => {
  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");

  if (authedUser) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');

    if (redirectUrl === null || redirectUrl.includes('login')) {
      return <Navigate to={'/'}/>;
    } else {
      return <Navigate to={redirectUrl}/>;
    }
  }

  const handleUsername = (username) => {
    setUsername(username);
  };
  const handlePassword = (password) => {
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username !== '' && password !== '') {
      dispatch(handleLogin(username, password));
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="container">
      <h2>Sign in</h2>

      <form>
        <label>User</label>
        <input className="form-control" type="text" name="username" onChange={handleUsername} defaultValue={"sarahedo"} />
        <div className="row pt-3">
          <label>Password (insert any you like)</label>
        </div>
        <input className="form-control" type="password" name="password" autoComplete="new-password" defaultValue={"password123"} onChange={handlePassword} />
        <div className="row pt-3">
          <div className="col-2">
            <Button color="primary" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = ({authedUser}) => ({
  authedUser: !!authedUser,
});

export default connect(mapStateToProps)(Login);
