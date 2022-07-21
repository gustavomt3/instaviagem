import React from 'react';
import Home from './Pages/Home';
import { GlobalStore } from './Contexts/GlobalContext';
import './GlobalStyles/App.module.scss';

function App() {
  return (
    <GlobalStore>
      <Home />
    </GlobalStore>
  );
}

export default App;
