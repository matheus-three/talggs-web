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



function Routes (){
    return(
        <BrowserRouter>
            <Link to="/">a lo </Link> 
   
        <Switch>  
            <Route exact={true} path="/" component={Main}> 
            
            </Route>
            <Route path ="/createReport" >
                <Main></Main>
            </Route>
            
        </Switch>
        
        </BrowserRouter>
    );
    }
export default Routes;     