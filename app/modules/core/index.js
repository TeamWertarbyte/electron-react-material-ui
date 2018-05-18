import { createModule } from '../../ModuleBundler'
import * as actions from './actions'
import reducers from './reducers'

const module = createModule('core')
module.actions = actions
module.reducers = reducers

export default module