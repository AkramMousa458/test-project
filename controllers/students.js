import students_model from "../models/students_DB.js";
import subjects_model from "../models/Subjects.js";
import { faker } from "@faker-js/faker";
import { get_Student_Data } from "./subjects.js";

export const create_Students = async (req, res) => {
  for (let index = 0; index < 200; index++) {
    students_model.create({
      id: faker.string.numeric(6),
      name: faker.person.fullName({ sex: "male" }),
      email: faker.internet.email(),
      year: faker.date.anytime(),
      subjects: [],
      departement: faker.commerce.department(),
      password: faker.internet.password(),
      phone: faker.phone.number("+20-1##-###-####"),
      address:
        faker.location.streetAddress(true) +
        faker.location.city() +
        faker.location.state(),
      gender: "Male",
    });
  }
  res.send("Students Created");
};

export const students = async (req, res) => {
  let students = get_Student_Data();
  res.render("StudentPage/index", { layout: false, students });
};

export const contacts = async (req, res) => {
  res.render("StudentPage/contact/contact", { layout: false });
};

export const materials = (req, res) => {
  res.render("StudentPage/materialtab/materialtab", { layout: false });
};

export const add_Student_Subjects = async (req, res) => {
  const { SW_2, kbs, math3, android, M_L, security } = req.body;
    let Student = get_Student_Data();
  subjects_model.create({
    student: Student[0]._id,
    subject_1: SW_2,
    subject_2: kbs,
    subject_3: math3,
    subject_4: android,
    subject_5: M_L,
    subject_6: security,
  });
    
    res.redirect('/home/material')
};
