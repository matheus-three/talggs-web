import React from 'react';
import Main from './Pages/Main'

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import CreateReport from './Pages/CreateReport';
import Header from './Pages/Header';



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/'>
                    <Header/>
                    <Main />
                </Route>
                <Route path="/createReport" >
                    <Header/>
                    <CreateReport/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;     