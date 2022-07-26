import {connect} from "react-redux";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Button} from "reactstrap";
import {handleAddVote} from "../actions/voteAction";
import {useState} from "react";

const Poll = ({poll, dispatch}) => {

  const [pollState, setPollState] = useState(poll);

  // check safely if property firstOption exists in poll object


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

const mapStateToProps = ({polls}) => {
  try {
    const poll = Object.values(polls.polls).find((poll) => {
      return parseInt(poll.id) === parseInt(useParams().id);
    });

    return {poll};
  } catch (e) {
    return <Navigate to="/404"/>;
  }
};

export default connect(mapStateToProps)(Poll);
