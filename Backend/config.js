import dotenv from 'dotenv'

dotenv.config()

export const mongoDB = process.env.MONGODB || "mongodb://localhost/keyencemongodb"
export const PORT = process.env.PORT || 3000