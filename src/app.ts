import express from 'express'
import morgan from 'morgan'
import MyRoutes from './routes'

const app = express()


app.use(express.json())
app.use(morgan('dev'))

app.use('/mod/v2', MyRoutes)

app.use((_req, res) => {
    res.status(404).json({
      status: 404,
      message: 'Intentalo denuevo'
    })
  })
  
export default app