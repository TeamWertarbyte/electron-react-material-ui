import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'

export default class MySnackbar extends Component {
  render () {
    return (
      <Snackbar
        open={this.props.open}
        message={this.props.message}
        autoHideDuration={3000}
        onClose={this.props.onClose}
      />
    )
  }
}

MySnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}
