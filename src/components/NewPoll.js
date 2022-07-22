import {connect, ReactReduxContext} from "react-redux";
import {addPoll} from "../actions/pollAction";
import {useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";

const NewPoll = (props) => {

  const navigate = useNavigate();
  const { store } = useContext(ReactReduxContext)
  const state = store.getState();
  // useEffect(() => {
  //   if (state.authedUser === null) {
  //     navigate("/");
  //   }
  // });

  const handleSubmit = (e) => {
    e.preventDefault();


    // get the form data
    const formData = new FormData(e.target);
    const firstOption = formData.get("first_option");
    const secondOption = formData.get("second_option");

    const poll = {
      firstOption: firstOption,
      secondOption: secondOption,
      author: state.authedUser,
    };

    props.dispatch(addPoll(poll));
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
