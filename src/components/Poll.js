import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Button} from "reactstrap";
import {addVote, handleAddVote} from "../actions/voteAction";
import {useState} from "react";

const Poll = () => {

  const state = useSelector((state) => state);

  const pollId = useParams().id;
  const poll = Object.values(state.polls.polls).find((poll) => {
    return parseInt(poll.id) === parseInt(pollId);
  });
  const [pollState, setPollState] = useState(poll);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddVote = (option, id) => {
    return async (dispatch) => {
      const makeId = () => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < 15; i++) {
          result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
        }
        return result;
      }

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

      createVote(option, id).then((vote) => dispatch(addVote(vote))).then(navigate('/'));
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
