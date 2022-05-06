import { Router } from 'express'
import MainController from '../controllers/MainController'

const mainRoutes = Router()
const controller = new MainController()

mainRoutes.post('/login', controller.login)
mainRoutes.post('/register', controller.register)

export default mainRoutes