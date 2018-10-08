import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  return (
    <nav className="grey lighten-2">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/" className="brand-logo center">QUATUOR</Link></li>
          <li><Link to="/quartets" exact="true">All Quartets</Link></li>
          <li><Link to="/quartets/new" exact="true">Add New</Link></li>
        </ul>
      </div>
    </nav>
  )
}
