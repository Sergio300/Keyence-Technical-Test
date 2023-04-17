import mongoose from "mongoose";

const createSchema = new mongoose.Schema({
    User_ID: {
        type: String,
    },
    User_Name: {
        type: String,
    },
    Dates: {
        type: String,
    },
    Punch_In: {
        type: String,
    },
    Punch_Out: {
        type: String,
    }
})

export default mongoose.model('KeyenceDB', createSchema)