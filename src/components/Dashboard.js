import {connect} from "react-redux";
import { ReactReduxContext } from 'react-redux';
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const Dashboard = () => {

  const { store } = useContext(ReactReduxContext)
  const navigate = useNavigate();

  useEffect(() => {
    const state = store.getState();
    console.log(state);
    if (state.authedUser === null) {
      navigate("/");
    }
  })

  return (
    <div>
      'Hello, this is me.'
    </div>
  );

};

const mapStateToProps = ({ }) => ({
});

export default connect(mapStateToProps)(Dashboard);
