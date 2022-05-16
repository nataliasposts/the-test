import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainScene from "Scenes/MainScene/MainScene";
import QuestionsList from "Components/QuestionsList";
import Result from "Components/Result";


const RootRouter = (props) =>{

    return(
            <React.Fragment>
                <Switch>
                <Route exact path={"/"}>
                    <MainScene/>
                </Route>  
                <Route path={"/test"}>
                    <QuestionsList/>
                </Route>  
                <Route path={"/result"}>
                    <Result/>
                </Route>  
                </Switch>
            </React.Fragment>
    )
}

export default RootRouter;