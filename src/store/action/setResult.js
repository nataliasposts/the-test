import { ANSWER_ACTION } from "../actionType"

export const setResult = (questionIndex, answerValue) => {
    return(
        {
            type: ANSWER_ACTION.setresult,
            payload: {questionIndex, answerValue}
        }
    )
}