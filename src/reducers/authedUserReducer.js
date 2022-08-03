import {LOGOUT, SET_AUTHED_USER} from "../actions/authedUserAction";

export default function authedUserReducer(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.username;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
