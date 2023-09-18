import mongoose, { mongo } from "mongoose";
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}`); //Fix with .env
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`)
        process.exit(1)
    }
};

export default connectDB
