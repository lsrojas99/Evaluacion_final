import { Router } from 'express'
import StartController from '../controllers/StartController'

const startRoutes = Router()
const controller = new StartController()

startRoutes.get('/info', controller.info)
startRoutes.get('/ping', controller.ping)

export default startRoutes