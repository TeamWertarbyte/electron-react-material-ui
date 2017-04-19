import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MySnackbar from '../containers/MySnackbar'
import { Sticky, StickyContainer } from 'react-sticky'
import Header from '../containers/Header'

export default class Application extends Component {
  render () {
    return (
      <StickyContainer>
        <Sticky stickyStyle={{zIndex: 10}}>
          <Header />
        </Sticky>
        {this.props.content}
        <MySnackbar />
      </StickyContainer>
    )
  }
}

Application.propTypes = {
  content: PropTypes.node.isRequired
}
