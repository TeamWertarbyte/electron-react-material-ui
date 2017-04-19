import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Header from '../components/Header'

class Container extends Component {
  onRequestRouteChange(route){
    console.log(route)
    this.props.dispatch(push(route))
  }

  render () {
    return (
      <Header
        onRequestRouteChange={(route) => this.onRequestRouteChange(route)}
      />
    )
  }
}

export default connect((state) => {
  return {}
})(Container)
