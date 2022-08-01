import {LOGOUT, SET_AUTHED_USER} from "../actions/authedUserAction";

export default function authedUserReducer(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        username: action.username,
        authorImage: action.authorImage,
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
