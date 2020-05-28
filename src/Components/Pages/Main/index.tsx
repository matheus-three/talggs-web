import React,{Fragment} from 'react'
import AccountDetails from './AccountDetails';
import TopBar from './TopBar';


function Main () {

  return(
    <Fragment>
      <TopBar/>
      <AccountDetails/>
    </Fragment> 
  );
}

export default Main;