import admin from "../models/admin.js";
import subject from "../models/subject.js";
import doctor from "../models/doctor.js";

// import { faker } from '@faker-js/faker';

export const login = async (req, res) => {

    const { email, password } = req.body
    const type = req.body.checked

    const admins = await admin.findOne({ email: email , password: password});
    if (type == "admin")
    {
        if(admins){
            console.log("Success")
            res.render('AdminPages/index', { layout: false })
        }else{
            console.log("Login Failed")
            res.send("Login Failed")
        }
    }else{
        res.send("Not available yet")
    }
    
}

export const home = async (req, res) => {
    admin.create({
        email: "email",
        password: "pass",
    })
    res.render('AdminPages/index', { layout: false })
}



export const subjectPage = async (req, res) => {
    // subject.create({
    //     name: "Logic",
    //     doctor: "Osama",
    //     department: "General",
    //     prev_req: "Physics"
    // })
    const {_id} = req.body
    const subjects = await subject.find().populate('doctor').lean();
    const count = await subject.find().count();
    res.render("AdminPages/subject", { subjects, count })
}

export const editSubject = async (req, res) => {
    const { _id } = req.params;
    const singleSubject = await subject.findById(_id).populate('doctor').lean();

    const doctors = await doctor.find().lean()
    res.render('AdminPages/editSubject', { singleSubject , doctors , layout: false})
}

export const updateSubject = async (req, res) => {
    const { _id } = req.params;
    const { subjectName, subjectId, subjectDeb, previousRequirement , subjectDoc} = req.body
    
    console.log(req.body)
    await subject.findByIdAndUpdate( _id , {
        $set :{
            name: subjectName,
            id: subjectId,
            doctor: subjectDoc,
            department: subjectDeb,
            prev_req: previousRequirement,
        }
    })
    res.redirect('/home/addSubject')
}

export const deleteSubject = async (req, res) => {
    const { _id } =req.params;
    await subject.findOneAndDelete(_id);
    console.log("del done");
    res.redirect('/home/addSubject')
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