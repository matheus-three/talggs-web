import React,{Fragment} from 'react'
import AccountDetails from './AccountDetails';
import TopBar from './TopBar';
import firebase from 'firebase';


function Main () {
  
  return(
    <Fragment>
      <TopBar/>
      <AccountDetails/>
    </Fragment> 
  );
}

export default Main;