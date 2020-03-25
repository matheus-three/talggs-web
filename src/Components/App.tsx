import React from 'react';
import Header from './Pages/Header';
import GlobalStyle, { MainStyle, Title, Button } from './Assets/Styles';
import Main from './Pages/Main';
import Routes from './Routes';


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
