import React from 'react';
import { Link } from 'react-router-dom'

export const QuartetText = (props) => {
  const quartet_url = `quartets/${props.quartet.id}`

  return(
    <Link to={quartet_url}>
    <div className="col s12 l6 xl4 ">
      <div className="card blue-grey darken-2">
        <div className="card-content white-text center-align">
          <p><strong>{props.quartet.title}</strong></p>
          <p>({props.quartet.year})</p>
        </div>
      </div>
    </div>
    </Link>
  )
}
