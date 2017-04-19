// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as core } from '../modules/core'

const reducers = combineReducers({
  core,
  routing
})

export default reducers
