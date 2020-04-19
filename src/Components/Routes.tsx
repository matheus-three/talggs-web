import React from 'react';
import Reports from './Pages/Reports'
import Main from './Pages/Main'

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import CreateReport from './Pages/CreateReport';
import Header from './Pages/Header';
import Graphics from './Pages/Graphics';
import CreateGraphics from './Pages/CreateGraphics';
import EditCupons from './Pages/editCupons';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/'>
                    <Header/>
                    <Main/>
                </Route>
                <Route path='/savedReports'>
                    <Header/>
                    <Reports/>
                 </Route>   
                <Route path="/createReport" >
                    <Header/>
                    <CreateReport/>
                </Route>
                <Route path = "/savedGraphics">
                    <Header/>
                    <Graphics/>
                </Route>  
                <Route path = "/createGraphics">
                    <Header/>  
                    <CreateGraphics/>  
                </Route>  
                <Route path = "/editCupons">
                    <Header/>
                    <EditCupons/>
                </Route>

            </Switch>
        </BrowserRouter>
    );
}
export default Routes;     