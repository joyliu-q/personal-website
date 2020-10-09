import React from 'react';
import './Home.css';

import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

export const Home = props => {
  return (
    <div className="Home">
      <NavBar breadcrumbs={["Home"]}/>
      <header className="App-header">
        <p>
          UwU
        </p>
      </header>
      <Footer/>
    </div>
  );
};
