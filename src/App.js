//React
import React from 'react';
//Styles
import './GlobalStyles/App.module.scss';
//Context
import { GlobalStorage } from './Contexts/GlobalContext';
//Components
import Header from './Components/Header/Header';
//Pages
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';
//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
