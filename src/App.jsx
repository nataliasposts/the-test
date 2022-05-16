import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import RootRouter from "./Routing/Root";
import GlobalStoreProvider from "./HOC/GlobalStoreProvider";



const App = (props) =>{
    return(
        <React.Fragment>
            <BrowserRouter>
            <GlobalStoreProvider>
            <MainLayout>
                <RootRouter/>
            </MainLayout>
            </GlobalStoreProvider>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;