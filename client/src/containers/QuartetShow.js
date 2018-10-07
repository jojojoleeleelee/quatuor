import React from 'react';
import { connect } from 'react-redux';
import { loadQuartet } from '../actions/quartets'

import Quartet from '../components/Quartet'

class QuartetShow extends React.Component {
  componentDidMount() {
    this.props.loadQuartet(this.props.match.params.id)
  }

  render() {
    return (
      <div>
  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quartet: state.quartets
  }
}

export default connect(mapStateToProps, {
  loadQuartet
})(QuartetShow)
