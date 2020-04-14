import React from 'react';
import GlobalStyle from './Assets/StylesSavedComponent';
import Routes from './Routes';
import AppContextProvider from './ContextApi/Context'
import FilterContextProvider from './ContextApi/ContextFilterState'

function App() {
  return (
    <div>
      <FilterContextProvider>
      <AppContextProvider>
        <GlobalStyle/>
        <Routes/>
      </AppContextProvider>
      </FilterContextProvider>
      
    </div>
  );
}

export default App;
