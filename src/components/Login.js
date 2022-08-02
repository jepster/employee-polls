import {connect, ReactReduxContext, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button} from 'reactstrap';
import {useEffect, useState, useContext} from "react";
import {setAuthedUser} from "../actions/authedUserAction";
import {handleInitialPollsData} from "../actions/handleInitialPollsData";
import {_getUsers} from "../_DATA";

const Login = async () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(handleInitialPollsData());
  });

  const { store } = useContext(ReactReduxContext);


  return (
    <div className="container">
      <h2>Sign in</h2>

      {state.showPasswordWarning ? (
        <div className="alert alert-danger" role="alert">
          Please enter a password.
        </div>
      ) : ''}

      <form>
        <label>User</label>
        <input className="form-control" type="text" name="username" onChange={setUsername} value={'sarahedo'}/>
        <div className="row pt-3">
          <label>Password (insert any you like)</label>
        </div>
        <input className="form-control" type="password" name="password" autoComplete="new-password" value={'password123'} onChange={setPassword} />
        <div className="row pt-3">
          <div className="col-2">
            <Button color="primary" onClick={setUserSignedIn}>Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
