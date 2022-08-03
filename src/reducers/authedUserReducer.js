import {LOGOUT_AUTHED_USER, SET_AUTHED_USER} from "../actions/authedUserAction";

export default function authedUserReducer(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.authedUser;
    case LOGOUT_AUTHED_USER:
      return null;
    default:
      return state;
  }
}
