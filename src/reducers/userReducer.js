import {ADD_ALL_USERS, ADD_USER} from "../actions/userAction";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.poll),
      }
    case ADD_ALL_USERS:
      return {
        ...state,
        users: action.users,
      }
    default:
      console.log('Action type: ' + action.type);
      return state;
  }
}
