import React, { Component } from 'react'
import MySnackbar from '../containers/MySnackbar'
import Header from '../containers/Header'

export default class Application extends Component {
  render () {
    const {
      children
    } = this.props

    return (
      <div>
        <Header />
        {children}
        <MySnackbar />
      </div>
    )
  }
}
