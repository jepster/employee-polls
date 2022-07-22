export const ADD_POLL = "ADD_POLL";
export const ADD_ALL_POLLS = "ADD_ALL_POLLS";

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}

export function addAllPolls(polls) {
  return {
    type: ADD_ALL_POLLS,
    polls,
  };
}
