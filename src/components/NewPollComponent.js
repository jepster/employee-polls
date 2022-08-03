import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {handleAddQuestion} from "../actions/questionAction";

const NewPollComponent = ({dispatch}) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleFirstOptionChange = (e) => {
    const value = e.target.value;
    setFirstOption(value);
  };

  const handleSecondOptionChange = (e) => {
    const value = e.target.value;
    setSecondOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };

  return (
    <div>
      <h1>New Poll</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="firstOption"
                 data-testid="firstOptionLabel">First Option</label>
          <div>
            <input
              value={firstOption}
              onChange={handleFirstOptionChange}
              type="text"
              name="firstOption"
              id="firstOption"
              data-testid="firstOption"
            />
          </div>
        </div>

        <div>
          <label htmlFor="secondOption"
                 data-testid="secondOptionLabel">Second Option</label>
          <div className="mt-1">
            <input
              value={secondOption}
              onChange={handleSecondOptionChange}
              type="text"
              name="secondOption"
              id="secondOption"
              data-testid="secondOption"
            />
          </div>
        </div>

        <div>
          <button type="submit" data-testid="submit-poll">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default connect()(NewPollComponent);
