import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const StyledMainScene = styled.div`
max-width: 100%;
padding: 165px 0 35px 0;
flex: 1 0 auto;

.container{
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
}
.mainscene-row{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.mainscene-title{
    align-self: center;
    margin-bottom: 15px;
    font-size: 65px;
    font-family: 'Roboto-Regular', sans-serif;
    text-align: center;
}
.mainscene-description{
    align-self: center;
    margin-bottom: 50px;
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 25px;
    text-align: center;
}
.mainscene-btn{
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
.mainscene-btn:hover{
    transform: scale(1.1, 1.1);
}
`



const MainScene = (props) => {
    const history = useHistory();

   const viewQuestions = () => {
        history.push("/test")
    }

    return(
       <StyledMainScene>
           <div className={"container"}>
            <div className={"mainscene-row"}>
               <h1 className={"mainscene-title"}>The test</h1>
               <h2 className={"mainscene-description"}>My test task! Enjoy 😍</h2>
               <button className={"mainscene-btn"}
                   onClick={(viewQuestions)}>
                   Start
                </button>
            </div>
           </div>
       </StyledMainScene>
    )    
}

export default MainScene;