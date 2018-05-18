import React, { Component } from 'react'
import { connect } from 'react-redux'
import MySnackbar from '../components/MySnackbar'
import { toggleSnackbar } from '../actions'

class Container extends Component {
  constructor (props) {
    super(props)
  }

  onClose () {
    this.props.dispatch(toggleSnackbar())
  }

  render () {
    return (
      <MySnackbar
        message={this.props.message}
        onClose={() => this.onClose()}
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
