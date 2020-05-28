import React from 'react';
import GlobalStyle from './Assets/styled-components/StylesSavedComponent';
import Routes from './Routes';
import AppContextProvider from './ContextApi/Context'
import FilterContextProvider from './ContextApi/ContextFilterState'
import GraphicsProvider from './ContextApi/ContextGraphics';
import RegisterContextProvider from './ContextApi/ContextRegister';
import * as firebase from 'firebase'
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDD8ft7kCn5S1VVRaKdR5ltlZrN221ywRs",
  authDomain: "talggs-serverless.firebaseapp.com",
  databaseURL: "https://talggs-serverless.firebaseio.com",
  projectId: "talggs-serverless",
  storageBucket: "talggs-serverless.appspot.com",
  messagingSenderId: "546999963786",
  appId: "1:546999963786:web:60a55ec8d0ed0f6a761d73",
  measurementId: "G-6P708HDSY5"
};

firebase.initializeApp(firebaseConfig);

function App() {
  
  return (
    <div>
      <FilterContextProvider>
      <AppContextProvider>
      <GraphicsProvider>
      <RegisterContextProvider>
        <GlobalStyle/>
        <Routes/>
      </RegisterContextProvider>
      </GraphicsProvider>
      </AppContextProvider>
      </FilterContextProvider>
      
    </div>
  );
}

export default App;
