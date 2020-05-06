import React from 'react';
import GlobalStyle from './Assets/styled-components/StylesSavedComponent';
import Routes from './Routes';
import AppContextProvider from './ContextApi/Context'
import FilterContextProvider from './ContextApi/ContextFilterState'
import GraphicsProvider from './ContextApi/ContextGraphics';

function App() {
  return (
    <div>
      <FilterContextProvider>
      <AppContextProvider>
      <GraphicsProvider>
        <GlobalStyle/>
        <Routes/>
      </GraphicsProvider>
      </AppContextProvider>
      </FilterContextProvider>
      
    </div>
  );
}

export default App;
