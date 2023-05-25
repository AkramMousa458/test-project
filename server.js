import express from "express";
import bodyParser from  "body-parser"
import { authuntications } from "./middleware/authuntications.js"
import cookieParser from "cookie-parser"
import multer from "multer";

const upload = multer({ dest: 'uploads/' });


const app = express();



import { engine } from "express-handlebars";

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose.connect(process.env.mongoConnectionUrl)


import Routers from "./routes/admin.js"


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(express.static('./public'))

app.use('/home', Routers)

  


app.listen(process.env.PORT, () =>{
    console.log(`Started app on http://localhost:${process.env.PORT}/home`)
})