import { ANSWER_ACTION } from "../actionType";

const initialState = {
    resultList: []
};

const answerReducer = (state = initialState, action) => {
    switch(action.type){
        case (ANSWER_ACTION.setresult):
            const newState = [...state.resultList];
            newState[action.payload.questionIndex] = action.payload.answerValue;
            return ({resultList: newState});

            case(ANSWER_ACTION.reset):
            return initialState;
            
        default: return state;
    }
}
    
    export default answerReducer;