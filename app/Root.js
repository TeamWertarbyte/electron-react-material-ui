import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from './configs/configureStore'
import { Provider } from 'react-redux'
import { Switch } from 'react-router-dom'
import Application from './modules/core/containers/Application'
import { createApp } from './ModuleBundler'
import Core from './modules/core'
import Home from './modules/home'

const theme = createMuiTheme()

const history = createHistory()
const store = configureStore({}, history)

const context = {
  store
}

const app = createApp(context)
app.loadModule(Core)
app.loadModule(Home)
app.init()

export default () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Switch>
            <Application>
              {app.routes}
            </Application>
          </Switch>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>
  )
}
