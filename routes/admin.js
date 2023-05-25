import { Router } from "express";
const router = new Router();

import { home, index, login, subjectPage, addSubject, createSubject, editSubject, doctorAndroid, logout} from "../controllers/admin.js"
import subject from "../models/subject.js";
import { authuntications } from "../middleware/authuntications.js";


router.post('/login', login)
router.get('/home', home) 
router.get('/addSubject', addSubject)
router.get('/addSubject/:id/edit', editSubject)

router.post('/createSubject', createSubject)

router.get('/subject', subjectPage)
router.post('/' , logout)
router.post('/doctorAndroid' , doctorAndroid)
router.get('/', index);

export default router;

