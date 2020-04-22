import React,{Fragment, useContext, useEffect} from 'react'
import { AppContext } from '../../ContextApi/Context';
import AccountDetails from './AccountDetails';
import TopBar from './TopBar';


function Main () {
  const {getReportStats} = useContext(AppContext)
  
  useEffect (() =>  {
    getReportStats();
  },[])

  return(
    <Fragment>
      <TopBar/>
      <AccountDetails/>
    </Fragment> 
  );
}

export default Main;