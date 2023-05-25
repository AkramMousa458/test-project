import { Router } from "express";
import { PostLoginFrorm, androidPage,  loginForm, logout } from "../controllers/doctor.js";
const router = new Router();
router.get('/', loginForm)
router.post('/DoctorPages' , PostLoginFrorm)
router.get('/' , )
router.post('/doctorAndroid' , androidPage)
router.post('/' , logout)

export default router;