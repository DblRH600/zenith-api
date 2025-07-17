import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './config/connection.js'
import productRouter from './routes/products.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3030

// =========== Middleware ===========
app.use(express.json())
app.use('/api/products', productRouter)

// =========== Route Testing ===========
app.get('/', (req, res) => {
  if (isConnected) {
    return res.status(200).json({ message: 'API is running' })
  } else {
    return res.status(500).json({ message: 'DB Connection Failed' })
  }
})

// =========== DB Connection & Start Server ===========
let isConnected = false

connectDB().then(() => {
  isConnected = true
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
  })
}).catch(err => {
    console.error('Server failed to start and connect to DB: ', err)
})
