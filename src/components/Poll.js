import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Button} from "reactstrap";
import {useState} from "react";
import makeId from "../services/makeId";

const Poll = () => {

  const state = useSelector((state) => state);

  const pollId = useParams().id;

  let votesFirstOption = 0;
  let votesSecondOption = 0;
  let poll;
  for (let i = 0; i < Object.values(state.polls.polls).length; i++) {
    poll = Object.values(state.polls.polls)[i];
    if (poll.id === pollId) {
      votesFirstOption += poll.votes_first_option;
      votesSecondOption += poll.votes_second_option;

      if (state.votes.votes !== undefined) {
        for (let i = 0; i < Object.values(state.votes.votes).length; i++) {
          let vote = Object.values(state.votes.votes)[i];
          if (vote.poll_id === pollId && vote.option === 'first_option') {
            votesFirstOption++;
          }
          if (vote.poll_id === pollId && vote.option === 'second_option') {
            votesSecondOption++;
          }
        }
      }
    }

    poll = {
      ...poll,
      votesFirstOption: votesFirstOption,
      votesSecondOption: votesSecondOption,
    }
  }

  const [pollState, setPollState] = useState(poll);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddVote = (option, id) => {
    return async (dispatch) => {
      const createVote = (option, id) => {
        return new Promise((res, rej) => {
          const vote = {
            id: makeId(),
            poll_id: id,
            option: option,
          };
          res(vote);
        });
      }

      // createVote(option, id).then((vote) => dispatch(addVote(vote))).then(navigate('/'));
    }
  }

  return (
    <>
      <h2>Would you rather?</h2>
      <div className="row">
        <div className="col-md-6">
          <p>
            { (pollState && pollState.hasOwnProperty('firstOption')) ? pollState.firstOption : ''}
          </p>
          <p>
            Votes count: { pollState.votesFirstOption }
          </p>
          <Button color="primary" onClick={() => dispatch(handleAddVote('first_option', pollState.id))}>Vote</Button>
        </div>
        <div className="col-md-6">
          <p>
            { (pollState && pollState.hasOwnProperty('secondOption')) ? pollState.secondOption : ''}
          </p>
          <p>
            Votes count: { pollState.votesSecondOption }
          </p>
          <Button color="primary" onClick={() => dispatch(handleAddVote('second_option', pollState.id))}>Vote</Button>
        </div>
      </div>
    </>
  );

}

export default Poll;
