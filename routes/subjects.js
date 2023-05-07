import { Router } from "express";
const router = new Router();

import { index, create, store, show, check_login, student_page } from "../controllers/subjects.js"

router.post('/check_login', check_login)

router.get('/', index);

router.get('/student', student_page)

router.get('/create', create)

router.post('/', store)

router.get('/:_id', show)

export default router;

