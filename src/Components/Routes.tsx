import React, { useEffect, useContext } from 'react';
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
import EditCoupon from './Pages/EditCoupon';
import Login from './Pages/Login';
import PreRegister from './Pages/Login/PreRegister';
import Register from './Pages/Login/Register';
import Perfil from './Pages/editPerfil';
import { AppContext } from './ContextApi/Context';

function Routes() {
	
    const {getReportStats} = useContext(AppContext)
  
    useEffect (() =>  {
      getReportStats();
    },[])
	return (
        <BrowserRouter>
            <Switch>
                <Route exact = {true} path ='/'>
                    <Login />
                </Route>
                <Route path = '/preRegister'>
                    <PreRegister />
                </Route>
                <Route path = '/register'>
                    <Register/>
                </Route>
                <Route path='/Home'>
                    <Header />
                    <Main />
                </Route>
                <Route path="/savedReports">
                    <Header />
                    <Reports />
                 </Route>   
                <Route path="/createReport" >
                    <Header />
                    <CreateReport />
                </Route>
                <Route path = "/savedGraphics">
                    <Header />
                    <Graphics />
                </Route>  
                <Route path = "/createGraphics">
                    <Header />  
                    <CreateGraphics />  
                </Route>  
                <Route path = "/editCupons">
                    <Header />
                    <EditCoupon />
                </Route>
                <Route path = "/editPerfil">
                    <Header/>
                    <Perfil/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;     