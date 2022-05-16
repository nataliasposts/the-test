const questionList = [
    {questionText:"If you make a mistake on this team. It is often hold against you", type: "lider"},
    {questionText:"It is safe to take a risk on this team", type: "manager"},
    {questionText:"Working with members of this team, my unique skills and talents are valued and utilized", type: "specialist"}

]

const initialState = {questionList};
const questionReducer = (state = initialState, action)=>{
    switch(action.type){
        default: return {...state}
   }
}

export default questionReducer;