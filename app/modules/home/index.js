import { createModule } from '../../ModuleBundler'
import routes from './routes'

const module = createModule('home')
module.routes = routes

export default module
