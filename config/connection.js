import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('DB connection established')
  } catch (error) {
    console.error('DB connection error: ', error)
    process.exit(1) // Exit process due to failure
  }
}

export default connectDB
