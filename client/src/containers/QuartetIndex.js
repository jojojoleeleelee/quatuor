import React from 'react';
import { connect } from 'react-redux'
import { loadQuartets } from '../actions/quartets'
import QuartetCard from './QuartetCard'

class QuartetIndex extends React.Component {
  componentDidMount() {
    this.props.loadQuartets()
  }
  // <div>
  // {this.props.quartets.map(quartet =>
  // <QuartetCard key={quartet.id} index={quartet.id} quartet={quartet}/>)}
  //
  // </div>
  render() {
    debugger;
    return (
      <div>Testing</div>
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
