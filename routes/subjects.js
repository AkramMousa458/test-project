import { Router } from "express";
const router = new Router();

import { index, login } from "../controllers/subjects.js"

router.post('/login', login)

router.get('/', index);

export default router;

