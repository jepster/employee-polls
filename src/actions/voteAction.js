import {handleInitialPollsData} from "./handleInitialPollsData";

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

export const handleAddVote = (option, id) => {
  return async (dispatch) => {

    const makeId = () => {
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for (let i = 0; i < 15; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }
      return result;
    }

    const createVote = (option, id) => {
      return new Promise((res, rej) => {
        const vote = {
          id: makeId(),
          poll_id: id,
          option: option,
        };

        setTimeout(() => {
          res(vote);
        }, 500);
      });
    }

    createVote(option, id).then((vote) => dispatch(addVote(vote)));
  }
}
