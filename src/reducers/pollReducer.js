import {ADD_POLL} from "../actions/pollAction";

export default function pollReducer(state = {}, action) {
  switch (action.type) {
    case ADD_POLL:
      if (Array.isArray(state.polls) && state.polls.length > 0) {
        state = {
          ...state,
          polls: state.polls.concat(action.poll),
        }
        return state.polls.flat();
      }
      return {
        ...state,
        polls: [action.poll],
      }
    default:
      console.log('Action type: ' + action.type);
      return state;
  }
}
