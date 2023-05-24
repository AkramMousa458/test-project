import { Router } from "express";
import { index, login } from "../controllers/subjects.js";
import {
  create_Students,
  contacts,
  materials,
  students,
  add_Student_Subjects,
} from "../controllers/students.js";
const router = new Router();

router.post('/login', login)
router.get('/', index);
router.get('/createStudents', create_Students);
router.get('/contact', contacts);
router.get("/material", materials);
router.post("/material", add_Student_Subjects);
router.get("/students", students);

export default router;

