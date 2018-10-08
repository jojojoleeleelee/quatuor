import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const QuartetCard = (quartet) => {
  const quartet_url = `quartets/${quartet.quartet.id}`

  return (
    <Link to={quartet_url}>
      <div className="card">
        <div className="card card-panel indigo lighten-4">
          <div className="card-content white-text center-align">
            <h4>{quartet.quartet.title}</h4>
            <br />
            <img className="responsive-img" src={quartet.quartet.image} alt="Quartet Image" height="390" width="390" />
            <h5>{quartet.quartet.year} - {quartet.quartet.country}</h5>

          </div>
        </div>
      </div>
    </Link>
  )
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}
export default connect(mapStateToProps)(QuartetCard)
