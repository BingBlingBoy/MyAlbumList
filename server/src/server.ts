import dotenv from "dotenv";
import express from "express";
import routes from "./routes/Token";
import cors from "cors"
import userRoutes from "./routes/userRoutes"
import {notFound, errorHandler} from "./middleware/errorMiddleware"
import connectDB from "./config/db";
import cookieParser from "cookie-parser";
import spotifyRoutes from "./routes/spotifyRoutes"

connectDB();
const port = 3000;
dotenv.config();
const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://myalbumlist-api.onrender.com",
        "https://myalbumlist.onrender.com",
        "https://6548e0277c28b720203bc33d--aesthetic-rugelach-7f7b33.netlify.app/",
        "https://aesthetic-rugelach-7f7b33.netlify.app",
        "https://main--aesthetic-rugelach-7f7b33.netlify.app"
    ]
}));


// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/spotify', spotifyRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server goes on http://localhost:${port}`);
})























// import { config } from "dotenv";
// config();
// const db =  mongoose.connect(process.env.MONGO_URL ?? "")
//     .then(() => {
//     console.log(`Listening on port ${Port}`);
//     app.listen(Port)
// })

