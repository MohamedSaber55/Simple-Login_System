import express, { json } from 'express'
import dbConnection from './databases/dbConnection.js'
import userRouter from './src/modules/users/users.router.js'
import cors from 'cors'
const app = express()
const port = 3000
app.use(json())
app.use(cors())
app.use('/users', userRouter)
import dotenv from 'dotenv'
dotenv.config()
dbConnection()




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))