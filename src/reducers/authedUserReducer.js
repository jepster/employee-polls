import {GET_AUTHED_USER, SET_AUTHED_USER} from "../actions/authedUserAction";

export default function authedUserReducer(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.username;
    default:
      return state;
  }
}
