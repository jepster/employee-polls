import {addAllQuestions} from "./questionAction";
import {_getQuestions, _getUsers} from "../_DATA";
import {addAllUsers} from "./userAction";

export function handleInitialPollsData() {
  return async (dispatch) => {
    const questions = await _getQuestions();
    const users = await _getUsers();
    dispatch(addAllQuestions(questions));
    dispatch(addAllUsers(users));
  };
}
