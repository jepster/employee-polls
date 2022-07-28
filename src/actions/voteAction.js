export const ADD_VOTE = "ADD_VOTE";
export const ADD_ALL_VOTES = "ADD_ALL_VOTES";

export function addVote(vote) {
  return {
    type: ADD_VOTE,
    vote,
  };
}

export function addAllVotes(votes) {
  return {
    type: ADD_ALL_VOTES,
    votes,
  };
}
