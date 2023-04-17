import dotenv from 'dotenv'

dotenv.config()

export const mongoDB = process.env.MONGODB || "mongodb://localhost/keyencemongodb"