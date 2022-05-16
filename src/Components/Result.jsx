import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { questionSelector } from "store/selector/questionSelector";
import {answerSelector} from "store/selector/answerSelector";
import { resetResult } from "store/action/resetResult";



const StyledResult = styled.div`
max-width: 100%;
padding: 125px 0 95px 0;
flex: 1 0 auto;

.container{
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
}
.result-row{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.result-title{
    align-self: center;
    text-align: center;
    margin-bottom: 60px;
    font-size: 40px;
    font-family: 'Roboto-Regular', sans-serif;
}
.result-title_score{
    margin-top: 25px;
    display: flex;
    flex-direction: column;
}
.result-title_score p{
    font-size: 30px;
    font-family: 'Roboto-Regular', sans-serif;
    margin-bottom: 15px;
}
.result-btn{
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
}
.result-btn:hover{
    transform: scale(1.1, 1.1);
}
`


const Result = (props) => {
    const history = useHistory();
    const question = useSelector(questionSelector);
    const answer = useSelector(answerSelector);
    const dispatch = useDispatch();
  


    const result = question.reduce((accum, value, index)=>{
        if(!accum[value.type]) accum[value.type] = 0;
        accum[value.type] = accum[value.type] + (+answer[index]);
        accum.total = accum.total + (+answer[index]);
        return accum;
    }, {total:0});

    let percentResult = {};

    Object.keys(result).map(questionTypeKey =>{
        if(questionTypeKey !== "total"){
            percentResult[questionTypeKey] = Math.floor(result[questionTypeKey]/result.total*100);
        }
    })

    const getReadableResult = (percentResult) => {
        let topResult = {amount:0, name: ""};
        Object.keys(percentResult).forEach(resultName =>{
            if(percentResult[resultName] > topResult.amount) topResult = {amount: result[resultName], name: resultName}
        })
        return Object.keys(percentResult).map(questionTypeKey => {
            return (<p>You are a {questionTypeKey} on {percentResult[questionTypeKey]} % </p>)
        })
    }

    return(
        <StyledResult>
            <div className={"container"}>
                <div className={"result-row"}>
                    <h3 className={"result-title"}>
                        Result:
                        <div className={"result-title_score"}>
                             {getReadableResult(percentResult)}
                        </div> 
                    </h3>
                    <p className={"result-score"}></p>
                    <button className={"result-btn"}
                        onClick={()=>{
                            dispatch(resetResult());
                            history.push("/");
                        }}>
                        Restart
                    </button>
                </div>
            </div>
        </StyledResult>
    )
}

export default Result;