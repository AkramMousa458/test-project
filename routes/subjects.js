import { Router } from "express";
const router = new Router();

import department from "../models/department.js"
import subject from "../models/subject.js"

router.get('/', async (req, res) => {
    const subjects = await subject.find()
    res.render('subjects/all', { subjects: subjects })
    console.log(subjects)
})



router.get('/create_department', async (req, res) => {
    await department.create({
        name: 'Computer Science',
        code: "CS",
    });

    await department.create({
        name: 'Information Systems',
        code: "IS",
    });

    await department.create({
        name: 'Information Technology',
        code: "IT",
    });

    res.send("Finish")
})

router.get('/create_subject', async (req, res) => {
    await subject.create({
        name: 'JAVA',
        code: "1",
    });

    await subject.create({
        name: 'C++',
        code: "2",
    });

    await subject.create({
        name: 'Android',
        code: "3",
    });

    res.send("Finish")
})



export default router;

