import { Router } from "express";
import {
  create_Students,
  contacts,
  materials,
  students,
  add_Student_Subjects,
} from "../controllers/students.js";
const router = new Router();
router.get("/createStudents", create_Students);
router.get("/contact", contacts);
router.get("/material", materials);
router.post("/material", add_Student_Subjects);
router.get("/", students);

export default router;
