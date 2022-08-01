import {ADD_ALL_POLLS, ADD_POLL, UPDATE_POLL} from "../actions/pollAction";

export default function pollReducer(state = {}, action) {
  switch (action.type) {
    case ADD_POLL:
      return {
        ...state,
        polls: state.polls.concat(action.poll),
      }
    case ADD_ALL_POLLS:
      return {
        ...state,
        polls: action.polls,
      }
    default:
      console.log('Action type: ' + action.type);
      return state;
  }
}
