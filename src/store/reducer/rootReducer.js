import { combineReducers } from "redux";
import questionReducer from "./questionReducer";
import answerReducer from "./answerReducer";


const rootReducer = combineReducers({
    questionReducer,
    answerReducer
});

export default rootReducer;