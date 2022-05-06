import { Router } from 'express'
import tokenValidator from '../middlewares/tokenValidator'
import mainRoutes from './mainRoutes'
import startRoutes from './startRoutes'
import MyRoutes from './MyRoutes'

const appRoutes = Router()

appRoutes.use('/', startRoutes)
appRoutes.use('/auth', mainRoutes)
appRoutes.use('/my', tokenValidator(), MyRoutes)

export default appRoutes