import Application from './modules/core/containers/Application'
import { routes as home } from './modules/home'

export default (store) => {
  return {
    component: Application,
    childRoutes: [
      home(store),
    ]
  }
}