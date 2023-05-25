import admin from "../models/admin.js";
import subject from "../models/subject.js";
import doctor from "../models/doctor.js";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";

import { faker } from '@faker-js/faker';

export const login = async (req, res) => {
    const { email, password } = req.body;
    const type = req.body.checked;
  
    if (type == "admin") {
      const admins = await admin.findOne({ email, password });
      if (admins) {
        console.log("Success");
        res.render("AdminPages/index", { layout: false });
      } else {
        console.log("Login Failed");
        res.send("Login Failed");
      }
    } else if (type == "doctor") {
      const Loggeduser = await doctor.findOne({ email });
      if (Loggeduser) {
        const iscorrectPassword = bcrypt.compareSync(password, Loggeduser.password);
        if (iscorrectPassword) {
          res.render("DoctorPages/doctor", { layout: false });
  
          const data = {
            _id: Loggeduser._id,
            email: Loggeduser.email,
          };
          const JwtTokeen = jwt.sign(data, process.env.JWT_SECRET);
          console.log(JwtTokeen);
          res.cookie("Token", JwtTokeen);
        } else {
          console.log("Login Failed");
        }
      } else {
        console.log("Login Failed");
      }
    }
  };

  export const doctorAndroid = (req , res) => {
    res.render('DoctorPages/doctorAndroid' , { layout: false });
  }
  

export const home = async (req, res) => {
    res.render('AdminPages/index', { layout: false })
}
export const logout = (req , res)=> {
    res.clearCookie('Token');
    res.redirect('/home')
    console.log(req.cookies)
  }



export const subjectPage = async (req, res) => {
    // subject.create({
    //     name: "Logic",
    //     doctor: "Osama",
    //     department: "General",
    //     prev_req: "Physics"
    // })
    const subjects = await subject.find().lean();
    const count = await subject.find().count();
    const doctors = await doctor.findById(subjects.doctor)
    // console.log(subjects[0].doctor)
    res.render("AdminPages/subject", { subjects, count , doctors })
}

export const editSubject = async (req, res) => {
    // const subjects = await subject.find().lean();
    const subjects = await subject.find().lean();
    const count = await subject.find().count();
    res.render('AdminPages/editSubject', { subjects, count , layout: false})
}


export const addSubject = async (req, res) => {
    const subjects = await subject.find().lean();
    const count = await subject.find().count();
    const doctors = await doctor.find().lean()
    res.render('AdminPages/addingSubject', { subjects, count, doctors })
}

export const createSubject = (req, res) => {
    const { subjectName, subjectId, subjectDeb, previousRequirement , subjectDoc} = req.body
    if (subjectName != "" && subjectId != "" && subjectDeb != "" && subjectDoc!= "" && previousRequirement != ""){
        subject.create({
            name: subjectName,
            doctor: subjectDoc,
            id: subjectId,
            department: subjectDeb,
            prev_req: previousRequirement,
        })
        res.redirect('/home/addSubject')
    }
    else 
        res.send("Enter Subject Data")
}





// export const create_admin = (req, res) => {
//     // admin.create({
//     //     email: "akrammousa458@gmail.com",
//     //     password: "akrammousa458",
//     // })
// }

// export const create_doctor = (req, res) => {
//     doctor.create({
//         name: "Hamad",
//         email: "hamad@gmail.com",
//         password: "hamad",
//     })
// }

export const student_page = (req, res) => {
    res.render("project/adminStudent/student")
}

export const index = async (req, res) => {
    res.render('login/index', {layout: false})
}

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