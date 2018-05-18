import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MySnackbar from '../containers/MySnackbar'
import Header from '../containers/Header'

export default class Application extends Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.content}
        <MySnackbar />
      </div>
    )
  }
}

Application.propTypes = {
  content: PropTypes.node.isRequired
}
