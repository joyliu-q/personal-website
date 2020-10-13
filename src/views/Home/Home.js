import React from 'react';
import './Home.css';

import { NavBar } from '../../components/NavBar/index.js'
import { Footer } from '../../components/Footer/index.js'

export const Home = props => {
  return (
    <div className="Home">
      <NavBar breadcrumbs={["Home"]}/>
      <header className="App-header">
          <h1>Joy Liu</h1>
          <h3>Joy Liu</h3>
      </header>
      <Footer/>
    </div>
  );
};
