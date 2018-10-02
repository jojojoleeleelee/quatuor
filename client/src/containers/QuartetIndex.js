import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadQuartets } from '../actions/quartets'
import { unloadQuartets } from '../actions/quartets'
import QuartetCard from './QuartetCard'

class QuartetIndex extends React.Component {
  componentDidMount() {
    this.props.loadQuartets()
  }

  componentWillUnmount() {
    this.props.unloadQuartets()
  }

  render() {
    return (
      <div className="row">
        <div className="center-align">
          <h4>Browse Quartets</h4>
          <hr />
        </div>
        {this.props.quartets !== [] ? <QuartetCard quartet={this.props.quartets}/> : null}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    quartets: state.quartets
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadQuartets: loadQuartets,
    unloadQuartets: unloadQuartets
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuartetIndex)
