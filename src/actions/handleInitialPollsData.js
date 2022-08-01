import {addAllPolls} from "./pollAction";

export function handleInitialPollsData() {
  return (dispatch) => {
    const pollsInitial = [
      {
        firstOption: 'Build our new application with Javascript',
        secondOption: 'Build our new application with Typescript',
        author: 'Tyler McGinnis',
        authorImage: 'https://github.com/tyler.png',
        votes_first_option: 3,
        votes_second_option: 2,
        id: '1asdfgiasufgi7834b',
      },
      {
        firstOption: 'Refactor our backend application with Python',
        secondOption: 'Refactor our backend application with PHP',
        author: 'Sarah Edo',
        authorImage: 'https://github.com/sarah.png',
        votes_first_option: 1,
        votes_second_option: 3,
        id: '2sdfuhsifuhiasf',
      },
      {
        firstOption: 'Learn React.JS',
        secondOption: 'Learn Vue.JS',
        author: 'Mat Samis',
        authorImage: 'https://github.com/mike.png',
        votes_first_option: 3,
        votes_second_option: 1,
        id: '3asdfhsakdf',
      },
      {
        firstOption: 'Testing with Jest',
        secondOption: 'Testing with Behat',
        author: 'Sarah Edo',
        authorImage: 'https://github.com/sarah.png',
        votes_first_option: 4,
        votes_second_option: 2,
        id: '4sdfhasdfhsadf',
      }
    ];

    dispatch(addAllPolls(pollsInitial));

  };
}
