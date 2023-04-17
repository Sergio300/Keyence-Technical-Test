import { connectDB } from "./mongodb.js"
import app from './app.js'

connectDB()

app.listen(3000)
console.log('Server in port ', 3000)