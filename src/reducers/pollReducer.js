import {ADD_ALL_POLLS, ADD_POLL, UPDATE_POLL} from "../actions/pollAction";

export default function pollReducer(state = {}, action) {
  switch (action.type) {
    case ADD_POLL:
      return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //   if (Array.isArray(state.polls) && state.polls.length > 0) {
        //     state = {
        //       ...state,
        //       polls: state.polls.concat(action.poll),
        //     }
        //     return state.polls.flat();
        //   }
        // }, 5000)
      });
      return {
        ...state,
        polls: [action.poll],
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
