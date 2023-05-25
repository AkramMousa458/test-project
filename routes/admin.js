import { Router } from "express";
const router = new Router();

import { home, index, login, subjectPage, addSubject, createSubject, editSubject,studentPage,createstudent,departmentPage,creatdepartment, updateSubject , deleteSubject} from "../controllers/admin.js"
import{createdoc, deldoc,updatedoc, doc_page} from"../controllers/admin.js"
import {showdocid} from "../controllers/admin.js"


router.post('/login', login)

router.get('/home', home) 
router.get('/addSubject', addSubject)

router.get('/addSubject/:_id/edit', editSubject)
router.put('/addSubject/:_id', updateSubject)

router.get('/addSubject/:_id', deleteSubject)


router.post('/createSubject', createSubject)

router.get('/subject', subjectPage)


router.get('/doctor', doc_page) 

router.post('/createdoc', createdoc)

router.get('/doctor/:_id',showdocid)

router.put('/editdoctor/:_id', updatedoc)

router.get('/doctor/:_id/del',deldoc)

router.get('/student', studentPage)
router.post('/student', createstudent)
router.get('/department', departmentPage)
router.post('/department', creatdepartment)
router.get('/', index);

export default router;

