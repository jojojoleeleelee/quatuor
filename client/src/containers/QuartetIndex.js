import React from 'react';
import { connect } from 'react-redux'

import { loadQuartets } from '../actions/quartets'
import QuartetCard from './QuartetCard'

class QuartetIndex extends React.Component {
  componentDidMount() {
    this.props.loadQuartets()
  }

  render() {
    return (
      <div className="row">
        <div className="center-align">
          <h4>Browse Quartets</h4>
          <hr />
        </div>
        { this.props.quartets !== [] ? this.props.quartets.map(q =>
        <QuartetCard key={q.id} index={q.id} quartet={q} /> ) : null}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    quartets: state.quartets
  }
}

export default connect(mapStateToProps, {
  loadQuartets
})(QuartetIndex)
