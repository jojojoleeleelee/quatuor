import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { QuartetText } from '../components/QuartetText'
import { QuartetImage } from '../components/QuartetImage'


class QuartetCard extends React.Component {
  render() {
    const quartetCards = this.props.quartets.map((quartet, i) => {
       return <QuartetText key={i} quartet={quartet} />
     })

    return(
      <div>
       {quartetCards}
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

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuartetCard)
