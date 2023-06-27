import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";


import Deck from "./models/Deck"

const app = express();
const Port = 5000;

app.get('/', (req, res) => {
    res.send("Hello World")
})

const db =  mongoose.connect(process.env.MONGO_URL ?? "")
    .then(() => {
    console.log(`Listening on port ${Port}`);
    app.listen(Port)
})

