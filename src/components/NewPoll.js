import {connect, ReactReduxContext} from "react-redux";
// import {addPoll} from "../actions/pollAction";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import makeId from "../services/makeId";

const NewPoll = (props) => {

  const navigate = useNavigate();
  const { store } = useContext(ReactReduxContext)
  const state = store.getState();

  const handleSubmit = (e) => {
    e.preventDefault();


    // get the form data
    const formData = new FormData(e.target);
    const firstOption = formData.get("first_option");
    const secondOption = formData.get("second_option");

    const poll = {
      firstOption: firstOption,
      secondOption: secondOption,
      author: state.authedUser.username,
      authorImage: state.authedUser.authorImage,
      votes_first_option: 0,
      votes_second_option: 0,
      id: makeId(),
    };

    // props.dispatch(addPoll(poll));

    navigate('/');
  }

  return (
    <>
      <h3 className="center">Would You Rather</h3>
      <p>
        Create Your Own Poll
      </p>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <input type="text" name="first_option" placeholder="First option" />
        <input type="text" name="second_option" placeholder="Second option" />
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
  );

}

export default connect()(NewPoll);
