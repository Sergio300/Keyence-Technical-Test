import { connectDB } from "./mongodb.js"
import app from './app.js'
import { PORT } from "./config.js"

connectDB()

app.listen(PORT)
console.log('Server in port ', PORT)