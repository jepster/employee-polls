import {ADD_VOTE, ADD_ALL_VOTES} from "../actions/voteAction";

export default function voteReducer(state = {}, action) {
  const defaultVotes = state.votes || [];

  switch (action.type) {
    case ADD_VOTE:
      console.log('ADD_VOTE has been triggered', action.vote);
      console.log(action.vote);
      // if (typeof state.votes === 'object' && Array.isArray(state.votes.votes)) {
      //
      //   state.votes.push(action.vote);
      //
      //
      // }

      return {
        ...state,
        votes: [...defaultVotes, action.vote]
      };
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
