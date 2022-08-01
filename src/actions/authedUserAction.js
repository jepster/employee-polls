export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT = "LOGOUT";

export function setAuthedUser(username, authorImage) {
  return {
    type: SET_AUTHED_USER,
    username,
    authorImage
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
