// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import theme from './theme'

type
  RootType = {
  store: {},
  history: {}
}

export default function Root ({store, history}: RootType) {
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <Router key={Math.random()} history={history} routes={routes(store)} />
      </MuiThemeProvider>
    </Provider>
  )
}
