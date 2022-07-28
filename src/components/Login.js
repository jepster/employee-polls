import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {useEffect, useState} from "react";
import {setAuthedUser} from "../actions/authedUserAction";
import {handleInitialPollsData} from "../actions/handleInitialPollsData";

const Login = ({ dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialPollsData());
  });

  const [state, setState] = useState({
    dropdownOpen: false,
    selectedUser: 'Select user',
    password: '',
    showPasswordWarning: false,
  });
  const navigate = useNavigate();
  const setUserSignedIn = (e) => {
    e.preventDefault();

    if (state.password !== '') {
      navigate("/dashboard");
      setState({...state, showPasswordWarning: false});
      dispatch(setAuthedUser(state.selectedUser));
    } else {
      setState({...state, showPasswordWarning: true});
    }
  };

  const toggle = (option) => {
    let selectedUser = 'Select user';
    if (option.target.innerText !== 'Select user') {
      selectedUser = option.target.innerText;
    }
    setState({dropdownOpen: !state.dropdownOpen, selectedUser: selectedUser});
  };

  const setPassword = (password) => {
    setState({...state, password: password});
  }

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
        <div className="row">
          <Dropdown>
            <Dropdown isOpen={state.dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                {state.selectedUser}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Tyler McGinnis</DropdownItem>
                <DropdownItem>Mat Samis</DropdownItem>
                <DropdownItem>Sarah Edo</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Dropdown>
        </div>
        <div className="row pt-3">
          <label>Password (insert any you like)</label>
        </div>
        <input type="password" name="password" autoComplete="new-password" onChange={setPassword} />
        <div className="row pt-3">
          <div className="col-2">
            <Button color="primary" onClick={setUserSignedIn}>Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default connect()(Login);
