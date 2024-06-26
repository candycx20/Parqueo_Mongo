import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import ticketRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/tickets', ticketRoutes)

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})