export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ALL_QUESTIONS = "ADD_ALL_QUESTIONS";

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addAllQuestions(questions) {
  return {
    type: ADD_ALL_QUESTIONS,
    questions,
  };
}
