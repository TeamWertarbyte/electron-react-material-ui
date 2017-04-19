import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import { syncHistoryWithStore } from 'react-router-redux'
import reactTapEventPlugin from 'react-tap-event-plugin'
import Root from './Root'
import configureStore from './store/configureStore'
import './app.global.less'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)
reactTapEventPlugin()

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root')
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
