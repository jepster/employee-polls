import {receiveUsers} from "./userAction";
import {receiveQuestions} from "./questionAction";
import {getInitialData} from "../util/api";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    };
}
