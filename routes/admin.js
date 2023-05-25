import { Router } from "express";
const router = new Router();

import { home, index, login, subjectPage, addSubject, createSubject, editSubject,doc_page} from "../controllers/admin.js"
import{createdoc, deldoc,updatedoc} from"../controllers/admin.js"
import {showdocid} from "../controllers/admin.js"
import subject from "../models/subject.js";

router.post('/login', login)
//router.get('/login', create_admin)
router.get('/home', home) 
router.get('/addSubject', addSubject)
router.get('/addSubject/:id/edit', editSubject)

router.post('/createSubject', createSubject)

router.get('/subject', subjectPage)


router.get('/doctor', doc_page) 

router.post('/createdoc', createdoc)

router.get('/doctor/:_id',showdocid)

router.put('/editdoctor/:_id', updatedoc)

router.get('/doctor/:_id/del',deldoc)

router.get('/', index);

export default router;

