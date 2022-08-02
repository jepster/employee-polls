import {ADD_ALL_QUESTIONS, ADD_QUESTION} from "../actions/questionAction";

export default function questionReducer(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.concat(action.poll),
      }
    case ADD_ALL_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      }
    default:
      console.log('Action type: ' + action.type);
      return state;
  }
}
