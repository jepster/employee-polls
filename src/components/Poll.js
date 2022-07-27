import {connect, ReactReduxContext, useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Button} from "reactstrap";
import {handleAddVote} from "../actions/voteAction";
import {useContext, useState} from "react";

const Poll = () => {

  const state = useSelector((state) => state);

  const pollId = useParams().id;

  const poll = Object.values(state.polls.polls).find((poll) => {
    return parseInt(poll.id) === parseInt(pollId);
  });

  const [pollState, setPollState] = useState(poll);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Would you rather?</h2>
      <div className="row">
        <div className="col-md-6">
          <p>
            { (pollState && pollState.hasOwnProperty('firstOption')) ? pollState.firstOption : ''}
          </p>
          <Button color="primary" onClick={() => dispatch(handleAddVote('first_option', pollState.id))}>Vote</Button>
        </div>
        <div className="col-md-6">
          <p>
            { (pollState && pollState.hasOwnProperty('secondOption')) ? pollState.secondOption : ''}
          </p>
          <Button color="primary" onClick={() => dispatch(handleAddVote('second_option', pollState.id))}>Vote</Button>
        </div>
      </div>
    </>
  );

}

export default Poll;
