import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as routes from "./routes";

dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

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

