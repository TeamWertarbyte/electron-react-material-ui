import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes'

const theme = createMuiTheme()

export default function Root ({store, history}) {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router key={Math.random()} history={history} routes={routes(store)} />
      </MuiThemeProvider>
    </Provider>
  )
}
