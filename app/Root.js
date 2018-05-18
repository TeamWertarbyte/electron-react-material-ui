// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme()
type
  RootType = {
  store: {},
  history: {}
}

export default function Root ({store, history}: RootType) {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router key={Math.random()} history={history} routes={routes(store)} />
      </MuiThemeProvider>
    </Provider>
  )
}
