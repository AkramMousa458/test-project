import express from "express";
const app = express();

import { engine } from "express-handlebars";

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose.connect(process.env.mongoConnectionUrl)



import subjectsRouter from "./routes/subjects.js"


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



app.use('/subjects', subjectsRouter)

app.listen(process.env.PORT, () =>{
    console.log(`Started app on http://localhost:${process.env.PORT}`)
})