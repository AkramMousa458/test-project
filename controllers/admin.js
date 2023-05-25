import admin from "../models/admin.js";
import subject from "../models/subject.js";
import doctor from "../models/doctor.js";
import student from "../models/students_DB.js";
import department from "../models/department.js";

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
   // admin.create({
            // email: "rawan@gmail.com",
            // password: "pass",
       
     //    })
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



export const index = async (req, res) => {
    res.render('login/index', {layout: false})
}

 export const studentPage = async (req, res) =>{
    const students = await student.find().lean();
    const count = await student.find().count();
    
    res.render('AdminPages/student', {layout: false, students,count})
   
}
export const createstudent = async (req, res) =>{
    const { userName,Email,academicNumber,Password,Phone,StudentDep} = req.body
    
    if (userName != "" && Email != "" && academicNumber != "" && Password!= "" && Phone != "" && StudentDep != ""){
        student.create({
            id:academicNumber,
            name:userName,
            email:Email,
            departement:StudentDep,
            password:Password,
            phone:Phone

        })
        console.log(req.body)
        res.redirect('/home/student')
       
    }
    else 
        res.send("Enter Subject Data")

}
    

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
///////////////////////////////////////////////////////////
export const departmentPage = async (req, res) =>{
    const departements = await department.find().lean();
    const count = await department.find().count();
    res.render('AdminPages/department', {layout: false,departements,count})
   
}
export const creatdepartment = async (req, res) =>{
    const { departmentName,departmentCode} = req.body
    
    if (departmentName != "" && departmentCode != "" ){
        department.create({
            name:departmentName,
            id:departmentCode,
        })
        console.log(req.body)
        res.redirect('/home/department')
    }
    else 
        res.send("Enter Subject Data")

}