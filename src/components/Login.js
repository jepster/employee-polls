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
    <div>
      <h2>Sign in</h2>
      <form>
        <label>User</label>
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
        <label>Password</label>
        <input type="password" name="password" />
        <Button color="primary" onClick={setUserSignedIn}>Submit</Button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ userSignedIn }) => ({
  userSignedIn: userSignedIn,
});

export default connect()(Login);
