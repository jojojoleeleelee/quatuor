import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.png'

const Home = () => {

  return (
    <div className="home">
      <div className="welcome">
        <h2>Quatuor</h2>
        <span className="welcome-text">Find quartet recordings!</span>
        < Link to="/quartet">
        <span>
            <img src={logo} alt="quatuor-logo" height="300" /><br /><br />
            <br /><br />
            <h5><strong>"The most perfect expression of human behavior is a string quartet."</strong></h5>

            <h6>- Jeffrey Tate, Conductor</h6>
            <br /><br />
            <br /><br />
            <br /><br />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
