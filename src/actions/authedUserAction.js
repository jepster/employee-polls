export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT = "LOGOUT";

export function setAuthedUser(username) {
  return {
    type: SET_AUTHED_USER,
    username,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
