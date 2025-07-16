import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productRouter from './routes/products.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3030

const uri = process.env.MONGODB_URI

// =========== Middleware ===========
app.use(express.json())
app.use('/api/products', productRouter)

// =========== DB Connection ==========
mongoose
  .connect(uri)
  .then(console.log('DB connection established'))
  .catch(err => console.error('DB connection error: ', err))
let isConnected = false

// =========== Route Testing ===========
app.get('/', (req, res) => {
  if (isConnected) {
    return res.status(200).json({ message: 'API is running' })
  } else {
    return res.status(500).json({ message: 'DB Connection Failed' })
  }
})

// =========== Start Server ===========
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})
