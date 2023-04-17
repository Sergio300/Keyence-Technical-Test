import dotenv from 'dotenv'

dotenv.config()

export const mongoDB = process.env.MONGODB || "mongodb://localhost:3000/keyencemongodb"
export const PORT = process.env.PORT || 3000