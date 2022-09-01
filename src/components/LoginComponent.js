import {Navigate, useNavigate} from "react-router-dom";
import {Button} from 'reactstrap';
import {useState} from "react";
import {setAuthedUser} from "../slices/authedUserSlice";
import {store} from "../store";

const LoginComponent = () => {
  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");
  const navigate = useNavigate();

  const state = store.getState()

  const handleUsername = (username) => {
    setUsername(username);
  };
  const handlePassword = (password) => {
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username !== '' && password !== '') {
      store.dispatch(setAuthedUser(username));
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h2>Sign in</h2>

      <form>
        <label>User</label>
        <input className="form-control" type="text" name="username" onChange={handleUsername}
               defaultValue={"sarahedo"}/>
        <div className="row pt-3">
          <label>Password (insert any you like)</label>
        </div>
        <input className="form-control" type="password" name="password" autoComplete="new-password"
               defaultValue={"password123"} onChange={handlePassword}/>
        <div className="row pt-3">
          <div className="col-2">
            <Button color="primary" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;
