export const login = async (req, res) => {

    const { email, password } = req.body
    const type = req.body.checked

    const admins = await admin.findOne({ email: email , password: password});
    const Loggeduser = await doctor.findOne({email:email});
    const iscorrectPassword = bcrypt.compareSync(password, Loggeduser.password);
    if (type == "admin")
    {
        if(admins){
            console.log("Success")
            res.render('AdminPages/index', { layout: false })
        }else{
            console.log("Login Failed")
            res.send("Login Failed")
        }
    }else if(Loggeduser && iscorrectPassword && type == "doctor"){
        res.render("DoctorPages/doctor" , {layout:false})

        const data = {
            _id: Loggeduser._id,
            email: Loggeduser.email,
        }
         const JwtTokeen = jwt.sign(data , process.env.JWT_SECRET)
        console.log(JwtTokeen)
        res.cookie('Token' , JwtTokeen)
        }else{
            console.log("Loging Filed")
        }
    
}