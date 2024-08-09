import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import styles from './index.module.css'
import PartStore from './store/PartStore.js';
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
      part: new PartStore(),
  }}>
    <App />
  </Context.Provider>
);

