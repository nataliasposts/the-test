import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { questionSelector } from "store/selector/questionSelector";
import { setResult } from "store/action/setResult";
import { answerSelector } from "store/selector/answerSelector";





const StyledQuestionslist = styled.div `
max-width: 100%;
padding: 125px 0 95px 0;
flex: 1 0 auto;

.container{
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
}
.questionlist-wrapper{
    display: flex;
    flex-direction: column;
}
.questionslist-row{
    display: flex;
    flex-direction: column;
}
.quetionslist-item{
    margin-bottom: 60px;
}
.questionslist-title{
    margin-bottom: 30px;
    text-align: center;
    font-size: 20px;
    font-family: 'Roboto-Regular', sans-serif;
}
.input-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.labelholder-item{
    font-size: 16px;
    font-family: 'Roboto-Regular', sans-serif;
}
.questionslist-answer{
    width: 450px;
}
.questionList-btn{
    margin: auto;
    width: 250px;
    background: #ff8000;
    color: #fff;
    padding: 18px 36px;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 50px;
    font-family: 'Roboto-Regular', sans-serif;
    cursor: pointer;
    transition: 400ms;
    margin-top: 20px;
    transition: 400ms;
}
.questionList-btn:hover{
    transform: scale(1.1, 1.1);
}
`


const QuestionsList= (props) => {
    const history = useHistory();
    const questions = useSelector(questionSelector);
    const dispatch = useDispatch();
    const answer = useSelector(answerSelector)
    const [answerThrottle, setAswerThrottle] = useState(0);

   

    const throttleResultSubmit = (questionIndex, answerValue) =>{
        if(answerThrottle.lastQuestionIndex === questionIndex && answerThrottle.intervalId) clearTimeout(answerThrottle.intervalId);
        setAswerThrottle({lastQuestionIndex: questionIndex, intervalId: setTimeout(()=>{
            dispatch(setResult(questionIndex, answerValue));
            setAswerThrottle({lastQuestionIndex: questionIndex, intervalId: null})
        }, 500)})
    };

    const handleChange = (questionIndex) => (e) =>{
        throttleResultSubmit(questionIndex, e.target.value);
    };

  

    return(
        <StyledQuestionslist>
            <div className={"container"}>
                <div className={"questionlist-wrapper"}>
                <ul className={"questionslist-row"}>
                    {questions.map((questionsData, questionIndex)=>{
                        return(
                            <li key={questionIndex} className={"quetionslist-item"}>
                                <p className={"questionslist-title"}>{questionsData.questionText}</p>
                                <div className={"input-wrapper"}>
                                    <p className={"labelholder-item"}>I strongly agree</p>
                                    <input type="range" className={"questionslist-answer"} min="0" max="100"
                                    onChange={handleChange(questionIndex)}
                                    />
                                    <p className={"labelholder-item"}>I strongly disagree</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <button className={"questionList-btn"} type="submit"
                    onClick={() => {history.push("/result")}}>
                  {(answer.filter(value => value).length === questions.length) ? "Submit" : "Please answer all questions"}
                </button>
                </div>
            </div>
        </StyledQuestionslist>
    )
}

export default QuestionsList;