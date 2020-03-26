import React from 'react';
import Main from './Pages/Main'

import { BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Button, Title } from './Assets/Styles';
import SaveReports from './Pages/Main/SaveReports';
import Header from './Pages/Header';
import CreateReport from './Pages/CreateReport';



function Routes (){
    return(
        <BrowserRouter>
        <Switch>  
            <Route exact={true} path="/" component={Main}> 
            
            </Route>
            <Route path ="/createReport" >
                <CreateReport></CreateReport>
            </Route>
            
        </Switch>
        
        </BrowserRouter>
    );
    }
export default Routes;     