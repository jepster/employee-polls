export const ADD_USER = "ADD_USER";
export const ADD_ALL_USERS = "ADD_ALL_USERS";

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addAllUsers(users) {
  return {
    type: ADD_ALL_USERS,
    users,
  };
}
