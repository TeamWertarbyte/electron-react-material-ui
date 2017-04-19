import React  from 'react'
import PropTypes from 'prop-types'

const styles = {
  text: {
    display4: {
      fontSize: 112,
      fontWeight: '300',
      fontFamily: 'Roboto, sans-serif',
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.54)'
    },
    display3: {
      fontSize: 56,
      fontWeight: '400',
      fontFamily: 'Roboto, sans-serif',
      letterSpacing: '-.02em',
      lineHeight: 1.35,
      color: 'rgba(0, 0, 0, 0.54)'
    },
    display2: {
      fontSize: 45,
      fontWeight: '400',
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '48px',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    display1: {
      fontSize: 34,
      fontWeight: '400',
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '40px',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    headline: {
      fontSize: 24,
      fontWeight: '400',
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '32px',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    title: {
      fontSize: 21,
      fontWeight: '500',
      fontFamily: 'Roboto, sans-serif',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.87)'
    },
    subheading: {
      fontSize: 16,
      fontWeight: '400',
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    body2: {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    body1: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    caption: {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'Roboto, sans-serif',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.54)'
    }
  },
  paragraph: {
    marginTop: 16,
    marginBottom: 16
  },
  noWrap: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  gutterBottom: {
    marginBottom: '0.35em'
  }
}

/**
 * This is a port of Material-UI next's text component for Material-UI 0.16.
 * https://github.com/callemall/material-ui/blob/next/src/Text/Text.js
 */
export default function Text (props) {
  const {
    component: componentProp,
    gutterBottom,
    noWrap,
    paragraph,
    style: styleProp,
    type,
    ...other
  } = props

  let style = styles.text[type]
  if (gutterBottom) {
    style = {...style, ...styles.gutterBottom}
  }
  if (noWrap) {
    style = {...style, ...styles.noWrap}
  }
  if (paragraph) {
    style = {...style, ...styles.paragraph}
  }
  if (styleProp) {
    style = {...style, ...styleProp}
  }

  const Component = paragraph ? 'p' : componentProp

  return (
    <Component
      style={style}
      {...other}
    />
  )
}
Text.propTypes = {
  children: PropTypes.node,
  component: PropTypes.string,
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.oneOf([
    'display4',
    'display3',
    'display2',
    'display1',
    'headline',
    'title',
    'subheading',
    'body2',
    'body1',
    'caption'
  ])
}

Text.defaultProps = {
  component: 'span',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  type: 'body1'
}
