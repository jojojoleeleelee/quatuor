import React from 'react';
import { connect } from 'react-redux';

const Quartet = (quartet) => {
  const learn_more = `${quartet.quartet.uri}`
  console.log(learn_more)
  return (
    <div className="card">
      <div className="card card-panel deep-purple lighten-4">
        <div className="card-content white-text center-align">
          <br />
          <br />
          <img className="responsive-img" src={quartet.quartet.image} alt="Smiley face" height="390" width="390" />
          <h3><strong>{quartet.quartet.title}</strong></h3>
          <h4>{quartet.quartet.year} - {quartet.quartet.country}</h4>
          <a href={learn_more}>Learn More!</a>
          <br />
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    text: state.text
  }
}

export default connect(mapStateToProps)(Quartet)
