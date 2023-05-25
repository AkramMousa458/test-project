import { Router } from "express";
import { doctorAndroid } from "../controllers/admin";
const router = new Router();



router.get('/doctorAndroid' , doctorAndroid)

export default router;