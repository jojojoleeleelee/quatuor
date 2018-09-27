import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from '../logo.png'

const Home = () => {

  return (
    <div className="home">
      <div className="welcome">
        <h2>Quatuor</h2>
        <span className="welcome-text">Find quartet recordings!</span>
        < Link to="/quartets">
        <span>
            <img src={logo} alt="quatuor-logo" height="300" /><br /><br />
            <br /><br />
            <h1><strong>Quatuor</strong></h1>
            <br /><br />
            <h5>Quartet Collection</h5>
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
