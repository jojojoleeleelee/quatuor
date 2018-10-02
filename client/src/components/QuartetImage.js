import React from 'react';
import { Link } from 'react-router-dom';

export const QuartetImage = (props) => {

  const quartet_url = `/quartets/${props.quartet.id}`

  return(
    <div className="col s3">
      <div className="card">
        <Link to={quartet_url}>
          <span>
            <img className="responsive-img" src={props.quartet.img_url} href={quartet_url} alt={props.quartet.name}/>
          </span>
        </Link>
      </div>
    </div>
  )
}
