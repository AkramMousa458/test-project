import express from "express";
import bodyParser from  "body-parser"
import  methodOverride from "method-override";
const app = express();

import { engine } from "express-handlebars";

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose.connect(process.env.mongoConnectionUrl)


import Routers from "./routes/admin.js"

app.use(methodOverride('_method'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'))

app.use('/home', Routers)

app.listen(process.env.PORT, () =>{
    console.log(`Started app on http://localhost:${process.env.PORT}/home`)
})