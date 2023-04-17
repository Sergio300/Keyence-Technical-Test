import express from "express"
import postRoutes from './routes/post.js'
import cors from 'cors'
import {dirname, join} from 'path'
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(express.json())
app.use(cors())
app.use(postRoutes)

console.log(__dirname)
app.use(express.static(join(__dirname,'../frontend/build')))

export default app