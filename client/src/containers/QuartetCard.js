import React from 'react'
import { connect } from 'react-redux';

const QuartetCard = (quartet) => {
  return (
    <div>
      <ul>
      <li>{quartet.quartet.text}</li>
      <li>{quartet.quartet.book}</li>
      <li>{quartet.quartet.chapter}</li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

export default connect(mapStateToProps)(QuartetCard)
