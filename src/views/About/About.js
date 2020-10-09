import React from 'react';
import { NavBar } from '../../components/NavBar'

export const About = props => {
  return (
    <div>
      <NavBar breadcrumbs={["About Me", "Dabberz"]}/>
      <h3>About View</h3>
      <p> This is the about view</p>
    </div>
  );
};
