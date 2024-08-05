import React from 'react';
import Header from './components/UI/header/Header.js';
import styles from './App.module.css'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter.js'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
    
  );
}

export default App;
