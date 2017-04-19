import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Home from '../components/Home'

class Container extends Component {
  onRequestRouteChange(route){
    this.props.dispatch(push(route))
  }

  render () {
    return (
      <Home
        onRequestRouteChange={(route) => this.onRequestRouteChange(route)}
      />
    )
  }
}

export default connect((state) => {
  return {}
})(Container)
