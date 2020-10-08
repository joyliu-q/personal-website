import React from 'react';
import logo from './logo.svg';
import './App.css';

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
