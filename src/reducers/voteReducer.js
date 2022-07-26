import {ADD_VOTE, ADD_ALL_VOTES} from "../actions/voteAction";

export default function voteReducer(state = {}, action) {
  switch (action.type) {
    case ADD_VOTE:
      if (state.votes) {
        return {
          ...state,
          votes: state.votes.concat(action.vote),
        };
      }
      return Object.assign({}, state,
        [action.vote],
      )
    case ADD_ALL_VOTES:
      return {
        ...state,
        votes: action.votes,
      }
    default:
      console.log('Action type: ' + action.type);
      return state;
  }
}
