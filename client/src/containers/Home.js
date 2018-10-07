import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.png'

const Home = () => {

  return (
    <div className="center-align">
      <div className="welcome">

        <Link to="/quartets">
        <span>
            <br /><br />
            <br /><br />
            <img src={logo} alt="quatuor-logo" className="blink_me" height="300" /><br />
            <h2>Quatuor</h2>
            <br />
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
