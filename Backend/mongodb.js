import mongoose from "mongoose";
import { mongoDB } from "./config.js";

export async function connectDB () {
    try{
        const db = await mongoose.connect(mongoDB)
        console.log("Connected to MongoDB", db.connection.name);
    }
    catch(error){
        console.error(error);
    } 

}