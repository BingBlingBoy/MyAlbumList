import dotenv from "dotenv";
import express from "express";
import path from "path";
import routes from "./routes/Token";
import cors from "cors"

const port = 3000;
dotenv.config();
const app = express();

app.use(cors());
// var corsMiddleware = function(req: any, res: any, next: any) {
//     res.header('Access-Control-Allow-Origin', 'localhost'); //replace localhost with actual host
//     res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
// 
//     next();
// }

app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));


app.use('/', routes)

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

