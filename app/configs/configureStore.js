import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware, routerReducer } from 'react-router-redux'

const createReducer = asyncReducers =>
  combineReducers({
    routing: routerReducer,
    ...asyncReducers
  })

export default function (initialState, browserHistory) {
  const routermw = routerMiddleware(browserHistory)
  const store = createStore(
    createReducer(),
    initialState,
    process.env.NODE_ENV !== 'production' && window.devToolsExtension ? compose(
      applyMiddleware(thunk),
      applyMiddleware(routermw),
      window.devToolsExtension()
    ) : compose(
      applyMiddleware(thunk),
      applyMiddleware(routermw)
    )
  )

  store.asyncReducers = {}
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(createReducer(store.asyncReducers))
    return store
  }

  return store
}
