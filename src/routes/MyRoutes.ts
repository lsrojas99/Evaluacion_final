import { Router } from 'express'
import MyController from '../controllers/MyController'

const MyRoutes = Router()
const controller = new MyController()

MyRoutes.get('/', controller.getAll)
MyRoutes.get('/:id', controller.getById)
MyRoutes.post('/', controller.create)
MyRoutes.put('/:id', controller.update)
MyRoutes.delete('/:id', controller.delete)

export default MyRoutes