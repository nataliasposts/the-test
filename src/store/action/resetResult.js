import { ANSWER_ACTION } from "../actionType";

export const resetResult = () => {
    return (
        {
            type: ANSWER_ACTION.reset,
            payload: {
            }
        })
};