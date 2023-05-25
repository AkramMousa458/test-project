import admin from "../models/admin.js";
import subject from "../models/subject.js";
import doctor from "../models/doctor.js";

import { faker, tr } from '@faker-js/faker';
import router from "../routes/admin.js";

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
    res.render('AdminPages/index', { layout: false })
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

export const doc_page = async(req, res) => 
{

    const docname= await doctor.find().lean();
    res.render("AdminPages/doctor",{docname })
}

export const createdoc=async(req,res)=>
{
    const {docuserName,docemail,docdoctorId,docPassword}=req.body;
    if (docuserName != "" && docemail != "" && docdoctorId != "" && docPassword!= ""){
        doctor.create({
            name: docuserName,
            email: docemail,
            ID: docdoctorId,
            password: docPassword,
        })
        res.redirect('/home/doctor')
    }
    else 
        res.send("Enter Subject Data")
}

export const showdocid =async(req,res)=>
{
    const { _id } =req.params;
    const singledoc= await doctor.findById(_id).lean();
    console.log(_id);
    console.log(singledoc);
    const {duserName,demail,ddoctorId,docPassword}=req.body
    res.render('AdminPages/editdoctor',{singledoc,layout:false})
}

export const updatedoc=async(req,res)=>
{
    const { _id } =req.params;
    const {duserName,demail,ddoctorId,docPassword}=req.body
    await doctor.findByIdAndUpdate(_id,{ $set :{
        name : duserName,
        email : demail,
        ID : ddoctorId,
        password : docPassword
    }})
    res.redirect('/home/doctor')
}



export const deldoc = async (req, res) => {
    const {id} =req.params;
    await doctor.findOneAndDelete(id);
    console.log("del done");
    res.redirect('/home/doctor')
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
//     admin.create({
//         email: "ahmednegm123@gmail.com",
//         password: "123456789",
//     })
// }

// export const create_doctor = (req, res) => {
//     doctor.create({

//         name: "Hamad",
//         ID :"1234",
//         email: "hamad@gmail.com",
//         password: "hamad",
//     })
//     res.send("Enter Subject Data")
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