import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Snackbar } from 'material-ui'

export default class MySnackbar extends Component {
  render () {
    return (
      <Snackbar
        open={this.props.open}
        message={this.props.message}
        autoHideDuration={3000}
        onRequestClose={this.props.onRequestClose}
      />
    )
  }
}

MySnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}
