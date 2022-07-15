import { connect } from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {useState} from "react";

const Login = ({ dispatch }) => {
  const [state, setState] = useState({
    dropdownOpen: false,
    selectedUser: 'Select user'
  });
  const navigate = useNavigate();
  const setUserSignedIn = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  const toggle = (option) => {
    let selectedUser = 'Select user';
    if (option.target.innerText !== 'Select user') {
      selectedUser = option.target.innerText;
    }
    setState({dropdownOpen: !state.dropdownOpen, selectedUser: selectedUser});
  };

  return (
    <div className="container">
      <h2>Sign in</h2>
      <form>
        <label>User</label>
        <div className="row">
          <Dropdown>
            <Dropdown isOpen={state.dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                {state.selectedUser}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Sylvester Stallone</DropdownItem>
                <DropdownItem>Bruce Willis</DropdownItem>
                <DropdownItem>Tom Cruise</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Dropdown>
        </div>
        <div className="row pt-3">
          <label>Password (insert any you like)</label>
        </div>
        <input type="password" name="password" />
        <div className="row pt-3">
          <div className="col-2">
            <Button color="primary" onClick={setUserSignedIn}>Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = ({ userSignedIn }) => ({
  userSignedIn: userSignedIn,
});

export default connect()(Login);
