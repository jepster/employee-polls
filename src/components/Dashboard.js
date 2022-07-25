import {connect} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Dashboard = (props) => {
  const navigate = useNavigate();

  const [pollsHtml, setPollsHtml] = useState(() => {
    if (props.newPolls.length !== 0) {
      return props.newPolls.polls.map(poll => {
        return (
          <li className={"list-group-item"} key={poll.id}>
            <a href={`/poll/${poll.id}`}>
              <div className={"d-flex justify-content-between"}>
                <h5>{poll.title}</h5>
                <small>{poll.author}</small>
              </div>
              <p>{poll.question}</p>
            </a>
          </li>
        )
      });
    }
  });

  return (
    <>
      <div className={"container"}>
        <h2>New Questions</h2>
        <div className={"row"}>
          <div className={"col-12"}>
            <ul className={"list-group"}>
              { pollsHtml }
            </ul>
          </div>
        </div>
      </div>
    </>
  );

};

const mapStateToProps = ({polls}) => (
  {
    newPolls: polls,
  }
);

export default connect(mapStateToProps)(Dashboard);
