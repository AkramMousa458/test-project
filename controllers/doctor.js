import doctor from "../models/doctor"; 
import bcrypt  from "bcryptjs";
import  jwt  from "jsonwebtoken";


export const registerForm = (req , res)=> {
    res.render('authentication/register');
}

export const postRegister = async (req , res) => {
    const {username , email , password} = req.body;
    var salt = bcrypt.genSaltSync(10);
    var encrptedPassword = bcrypt.hashSync(password, salt);
    console.log(encrptedPassword);
    await doctor.create({username ,email , password: encrptedPassword})

    res.redirect('/home');
}
export const loginForm = (req , res)=> {
      res.render('login/index', {layout:false});
 
}

var JwtTokeen;

export const PostLoginFrorm = async (req , res) => {
    const { email , password} = req.body;
    const type = req.body.checked;

    const Loggeduser = await doctor.findOne({email:email});
    
     const iscorrectPassword = bcrypt.compareSync(password, Loggeduser.password);


  

            if(Loggeduser && iscorrectPassword && type == "doctor"){
            res.render("DoctorPages/doctor" , {layout:false})

            const data = {
                _id: Loggeduser._id,
                email: Loggeduser.email,
            }
             JwtTokeen = jwt.sign(data , process.env.JWT_SECRET)
            console.log(JwtTokeen)
            res.cookie('Token' , JwtTokeen)
            }else{
                console.log("Loging Filed")
            }

}
export const androidPage = (req , res)=>{
    res.render('DoctorPages/doctorAndroid' ,  {layout :false})
}

export const logout = (req , res)=> {
  res.clearCookie('Token');
  res.redirect('/home')
  console.log(req.cookies)
}