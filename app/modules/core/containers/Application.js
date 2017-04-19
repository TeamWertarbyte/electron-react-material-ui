import React, { Component } from 'react'
import { connect } from 'react-redux'
import Application from '../components/Application'
import { setResponsiveBreakpoint } from '../actions'

class Container extends Component {
  constructor (props) {
    super(props)

    this.onResize(window.innerWidth)
    this.handleResize = () => {
      this.onResize(window.innerWidth)
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  onResize (value) {
    this.props.dispatch(setResponsiveBreakpoint(value))
  }

  render () {
    return (
      <Application
        {...this.props}
      />
    )
  }
}

export default connect((state) => {
  return {
    mobile: state.core.responsive.mobile,
    tablet: state.core.responsive.tablet,
    desktop: state.core.responsive.desktop
  }
})(Container)
