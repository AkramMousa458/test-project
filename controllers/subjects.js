import admin from "../models/admin.js";


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

// export const create_admin = (req, res) => {
//     // admin.create({
//     //     email: "akrammousa458@gmail.com",
//     //     password: "akrammousa458",
//     // })
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