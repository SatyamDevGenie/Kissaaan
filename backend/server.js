import dotenv from 'dotenv'
import express from 'express'
import chalk from 'chalk'
import cors from 'cors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config() // For Env
connectDB() // connection to Mongodb

const app = express()
app.use(express.json()) // Accepting the json data
app.use(cors())

// Routes
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('Kissaaan API is running')
})

// Error Middleware
app.use(notFound)
app.use(errorHandler)

// ENV Setup
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    chalk.yellowBright(
      `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
    )
  )
})
