import admin from "../models/admin.js";
import students_model from "../models/students_DB.js";

var STUDENT = null;

export const login = async (req, res) => {
  const { email, password } = req.body;
  const type = req.body.checked;

  const admins = await admin.findOne({ email: email, password: password });
  const students = await students_model.find({ email: email, password: password }, {}).lean();
  STUDENT = students;
  if (type == "admin") {
    if (admins) {
      console.log("Success");
      res.render("AdminPages/index", { layout: false });
    } else {
      console.log("Login Failed");
      res.send("Login Failed");
    }
  }

  if (type == "student") {
    if (students) {
      console.log("Success");
      res.redirect("/home/students");
    } else {
      console.log("Login Failed");
      res.send("Login Failed");
    }
  }
};

export function get_Student_Data() {
  return STUDENT;
};

// export const create_admin = (req, res) => {
//     admin.create({
//         email: "akrammousa458@gmail.com",
//         password: "akrammousa458",
//     })
// }

export const student_page = (req, res) => {
  res.render("project/adminStudent/student");
};

export const index = async (req, res) => {
  res.render("login/index", { layout: false });
};

// export const create = async (req, res) =>{
//     const departments = await department.find().lean();
//     console.log(departments);
//     res.render('subjects/create', { departments })
// }

// export const store = async (req, res) => {
//     const  {name, code, department} = req.body
//     await subject.create({
//         name: name,
//         code: code,
//         department: department,
//     })
//     res.redirect('/subjects')
// }

// export const show = async (req, res) => {
//     const {_id} = req.params

//     const singleSubject = await subject.findById(_id)
//     .populate('department')
//     .lean()

//     res.render('subjects/show', { subject: singleSubject})
// }
