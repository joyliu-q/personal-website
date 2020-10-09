import React from 'react';
import './App.css';

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar breadcrumbs={[]}/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
