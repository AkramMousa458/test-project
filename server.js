import express from "express";
import bodyParser from  "body-parser"
import { engine } from "express-handlebars";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Routers from "./routes/subjects.js"
import  Students_Routers  from "./routes/students.js";

const app = express();
dotenv.config();
mongoose.connect(process.env.mongoConnectionUrl)

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'))
app.use('/home', Routers)
app.use("/students", Students_Routers);
app.listen(process.env.PORT, () =>{
    console.log(`Started app on http://localhost:${process.env.PORT}/home`)
})