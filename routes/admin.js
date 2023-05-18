import { Router } from "express";
const router = new Router();

import { home, index, login, subjectPage, addSubject } from "../controllers/admin.js"

router.post('/login', login)
router.get('/home', home)
router.get('/addSubject', addSubject)

router.get('/subject', subjectPage)

router.get('/', index);

export default router;

