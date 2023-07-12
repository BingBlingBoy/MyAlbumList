import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://keith123:keith123@myalbumlistauth.hoe4hjz.mongodb.net/mernauth?retryWrites=true&w=majority"); //Fix with .env
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`)
        process.exit(1)
    }
};

export default connectDB
