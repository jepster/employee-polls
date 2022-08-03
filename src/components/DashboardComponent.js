import {Link} from "react-router-dom";
import {connect} from "react-redux";

export const DashboardComponent = ({authedUser, questions}) => {
  const unanswered = (question) => (!question.optionOne.votes.includes(authedUser.id)
    && !question.optionTwo.votes.includes(authedUser.id));

  const answered = (question) => (question.optionOne.votes.includes(authedUser.id)
    || question.optionTwo.votes.includes(authedUser.id));

  return (
    <div>
      <h1 data-testid="heading">Dashboard</h1>

      <h2>New Questions</h2>
      <ul>
        {questions
          .filter(unanswered)
          .map((question) => (
            <li key={question.id}>
              <Link to={'poll/' + question.id}>
                <div>
                  <div>
                    <div>{question.author}</div>
                    <p>{new Date(question.timestamp).toDateString()}</p>
                    <p>Show</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>

      <h2>Answered Questions</h2>
      <ul>
        {questions
          .filter(answered)
          .map((question) => (
            <li key={question.id}>
              <Link to={'poll/' + question.id}>
                <div>
                  <div>
                    <div>{question.author}</div>
                    <p>{new Date(question.timestamp).toDateString()}</p>
                    <p>Show</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );

};

const mapStateToProps = ({authedUser, questions}) => ({
  authedUser,
  questions: Object.values(questions).sort(
    (a, b) => b.timestamp - a.timestamp
  ),
});

export default connect(mapStateToProps)(DashboardComponent);
