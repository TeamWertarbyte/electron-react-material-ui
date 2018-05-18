export default class App {
  constructor (context) {
    if (!context) {
      const message = 'Context is required when creating a new app.'
      throw new Error(message)
    }

    this.context = context
    this.actions = {}
    this.reducers = {}
    this.routes = []
  }

  bindContext (_actions) {
    const actions = {}
    for (let key in _actions) {
      if (_actions.hasOwnProperty(key)) {
        const actionMap = _actions[key]
        const newActionMap = {}
        for (let actionName in actionMap) {
          if (actionMap.hasOwnProperty(actionName)) {
            newActionMap[actionName] =
              actionMap[actionName].bind(null, this.context)
          }
        }
        actions[key] = newActionMap
      }
    }

    return actions
  }

  loadModule (module) {
    console.log('Load module', module.name)
    this.checkForInit()
    if (!module) {
      const message = 'Should provide a module to load.'
      throw new Error(message)
    }

    if (!module.name) {
      const message = 'Should provide a module name.'
      throw new Error(message)
    }

    if (module.loaded) {
      const message = `The module ${module.name} is already loaded.`
      throw new Error(message)
    }

    const actions = module.actions || {}
    this.actions = {
      ...this.actions,
      [module.name]: actions
    }

    if(module.reducers){
      this.context.store.injectReducer(module.name, module.reducers)
      const reducers = module.reducers || {}
      this.reducers = {
        ...this.reducers,
        [module.name]: reducers
      }
    }

    if(module.routes){
      this.routes.push(module.routes())
    }

    if (module.load) {
      if (typeof module.load !== 'function') {
        const message = 'module.load should be a function'
        throw new Error(message)
      }

      // This module has no access to the actions loaded after this module.
      const boundedActions = this.bindContext(this.actions)
      module.load(this.context, boundedActions)
    }

    module.loaded = true
  }

  init () {
    this.checkForInit()
    this.initialized = true
  }

  checkForInit () {
    if (this.initialized) {
      const message = 'App is already initialized'
      throw new Error(message)
    }
  }
}
