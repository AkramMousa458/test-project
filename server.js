import express from "express";
import bodyParser from  "body-parser"

const app = express();

import { engine } from "express-handlebars";

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose.connect(process.env.mongoConnectionUrl)


// import subjectsRouter from "./routes/subjects.js"
import Routers from "./routes/subjects.js"


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(__dirname, '/public'));
app.use(express.static('./public'))

app.use('/home', Routers)

app.listen(process.env.PORT, () =>{
    console.log(`Started app on http://localhost:${process.env.PORT}/home`)
})