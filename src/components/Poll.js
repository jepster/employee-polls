import {connect} from "react-redux";
import {Navigate, useNavigate, useParams} from "react-router-dom";

const Poll = ({poll}) => {

  console.log(poll);

}

const mapStateToProps = ({polls}) => {
  try {
    const poll = Object.values(polls.polls).find((poll) => {
      return parseInt(poll.id) === parseInt(useParams().id);
    });

    return {poll};
  } catch (e) {
    return <Navigate to="/404"/>;
  }
};

export default connect(mapStateToProps)(Poll);
