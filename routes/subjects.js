import { Router } from "express";
import { index, login } from "../controllers/subjects.js";
const router = new Router();

router.post('/login', login)
router.get('/', index);

export default router;

