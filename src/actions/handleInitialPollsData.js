import {addAllPolls} from "./pollAction";

export function handleInitialPollsData() {
  return (dispatch) => {
    const pollsInitial = [
      {
        firstOption: 'Build our new application with Javascript',
        secondOption: 'Build our new application with Typescript',
        author: 'Tyler McGinnis',
        authorImage: 'https://github.com/tyler.png',
        votes: 3,
        id: 1,
      },
      {
        firstOption: 'Refactor our backend application with Python',
        secondOption: 'Refactor our backend application with PHP',
        author: 'Sarah Edo',
        authorImage: 'https://github.com/sarah.png',
        votes: 0,
        id: 2,
      },
      {
        firstOption: 'Learn React.JS',
        secondOption: 'Learn Vue.JS',
        author: 'Mat Samis',
        authorImage: 'https://github.com/mike.png',
        votes: 2,
        id: 3,
      },
      {
        firstOption: 'Testing with Jest',
        secondOption: 'Testing with Behat',
        author: 'Sarah Edo',
        authorImage: 'https://github.com/sarah.png',
        votes: 3,
        id: 4,
      }
    ];

    dispatch(addAllPolls(pollsInitial));

  };
}
