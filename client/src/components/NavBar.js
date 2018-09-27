import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  return (
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">QUATUOR</Link> <br />
          <Link to="/quartet" exact="true">All Quartets</Link> <br />
          <Link to="/quartet/new" exact="true">Add New</Link> <br />

      </div>
    </nav>
  )
}
