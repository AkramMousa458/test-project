import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

mongoose.connect(process.env.mongoConnectionUrl)

app.get('/', (req, res) =>{
    res.render("departments/all")
})

app.listen(process.env.PORT, () =>{
    console.log(`Started app on http://localhost:${process.env.PORT}`)
})