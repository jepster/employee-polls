import {connect} from "react-redux";
import { ReactReduxContext } from 'react-redux';
import {useContext, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {handleInitialData} from "../actions/shared";

export const Dashboard = (props) => {
  const navigate = useNavigate();

  useEffect( () => {
    handleInitialData();
  });


  return (
    <>
      <div className={"container"}>
        <h2>New Questions</h2>
        <div className={"row"}>
          <div className={"col-12"}>
            <ul className={"list-group"}>
              {console.log(props.polls)}
            {/*  {props.newPolls.map(poll => {*/}
            {/*    return (*/}
            {/*      <li className={"list-group-item"} key={poll.id}>*/}
            {/*        <div className={"d-flex justify-content-between"}>*/}
            {/*          <h5>{poll.title}</h5>*/}
            {/*          <small>{poll.author}</small>*/}
            {/*        </div>*/}
            {/*        <p>{poll.question}</p>*/}
            {/*      </li>*/}
            {/*    )*/}
            {/*  })*/}
            {/*}*/}
            </ul>
          </div>
        </div>
      </div>
    </>
  );

};

const mapStateToProps = ({polls}) => (
  {
    polls: polls
  }
);

export default connect(mapStateToProps)(Dashboard);
