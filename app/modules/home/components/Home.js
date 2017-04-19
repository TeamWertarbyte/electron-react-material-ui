import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Home extends Component {
  render () {
    const {
      onRequestRouteChange
    } = this.props

    return (
      <div>
        Hello World!
      </div>
    )
  }
}

Home.propTypes = {
  onRequestRouteChange: PropTypes.func.isRequired
}
