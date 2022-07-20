export const ADD_POLL = "ADD_POLL";

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}
