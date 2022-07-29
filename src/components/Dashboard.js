import {connect, useSelector} from "react-redux";
import {useState} from "react";
import {Link, Redirect, Route} from "react-router-dom";

export const Dashboard = ({polls, votes, authedUser}) => {
  const [pollsHtml, setPollsHtml] = useState(() => {
    const newPolls = polls.polls.map(poll => {
      let vote = false;
      if (votes.votes && votes.votes.length > 0) {
        vote = votes.votes.find(vote => vote.poll_id === poll.id);
      }
      if (!vote) {
        return (
          <li className={"list-group-item"} key={poll.id}>
            <Link to={'/poll/' + poll.id}>
              <div className={"d-flex justify-content-between"}>
                <h5>{poll.title}</h5>
                <small>{poll.author}</small>
              </div>
              <p>{poll.question}</p>
            </Link>
          </li>
        )
      }
    });
    const pollsWithVotes = polls.polls.map(poll => {
      let vote = false;
      if (votes.votes && votes.votes.length > 0) {
        vote = votes.votes.find(vote => vote.poll_id === poll.id);
      }
      if (vote) {
        return (
          <li className={"list-group-item"} key={poll.id}>
            <Link to={'/poll/' + poll.id}>
              <div className={"d-flex justify-content-between"}>
                <h5>{poll.title}</h5>
                <small>{poll.author}</small>
              </div>
              <p>{poll.question}</p>
            </Link>
          </li>
        )
      }
    });
    return {
      newPollsHtml: newPolls,
      pollsWithVotesHtml: pollsWithVotes,
    }
  });

  return (
    <>
      <div className={"container"}>
        <h2>New Polls</h2>
        <div className={"row"}>
          <div className={"col-12"}>
            <ul className={"list-group"}>
              {pollsHtml.newPollsHtml}
            </ul>
          </div>
        </div>
        <h2>Answered Polls</h2>
        <div className={"row"}>
          <div className={"col-12"}>
            <ul className={"list-group"}>
              {pollsHtml.pollsWithVotesHtml}
            </ul>
          </div>
        </div>
      </div>
    </>
  );

};

const mapStateToProps = ({polls, votes}) => (
  {
    polls: polls,
    votes: votes,
  }
);

export default connect(mapStateToProps)(Dashboard);
