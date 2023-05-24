import { Router } from "express";
const router = new Router();

import { home, index, login, subjectPage, addSubject, createSubject, editSubject,studentPage,createstudent,departmentPage,creatdepartment} from "../controllers/admin.js"
import subject from "../models/subject.js";

router.post('/login', login)
router.get('/home', home) 
router.get('/addSubject', addSubject)
router.get('/addSubject/:id/edit', editSubject)

router.post('/createSubject', createSubject)

router.get('/subject', subjectPage)
router.get('/student', studentPage)
router.post('/student', createstudent)
router.get('/department', departmentPage)
router.post('/department', creatdepartment)
router.get('/', index);

export default router;

