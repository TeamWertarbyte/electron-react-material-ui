export default class Module {
  constructor (name) {
    if (!name) {
      const message = 'Name is required when creating a new module.'
      throw new Error(message)
    }

    this.loaded = false
    this.name = name
    this.actions = {}
    this.api = {}
    this.reducers = null
    this.routes = null
  }

  // may call a onHandleLoad callback later or removed completely
  load (context, actions) {
    console.log(`Loading module ${this.name} finished`)
  }
}
