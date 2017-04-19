import React, { Component } from 'react'
import { connect } from 'react-redux'
import MySnackbar from '../components/MySnackbar'
import { toggleSnackbar } from '../actions'

class Container extends Component {
  constructor (props) {
    super(props)
  }

  onRequestClose () {
    this.props.dispatch(toggleSnackbar())
  }

  render () {
    return (
      <MySnackbar
        message={this.props.message}
        onRequestClose={() => this.onRequestClose()}
        open={this.props.open}
      />
    )
  }
}

export default connect((state) => {
  return {
    open: state.core.snackBar.open,
    message: state.core.snackBar.message
  }
})(Container)
