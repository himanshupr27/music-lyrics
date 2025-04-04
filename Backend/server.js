import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./db.js";
import env from "dotenv";
env.config();
const app=express();
// app.use(cors(CorsOption));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is running at ${PORT}`)
    });
});