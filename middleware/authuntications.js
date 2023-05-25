import jwt from "jsonwebtoken";

export const authuntications = (req , res , next) =>{
    const {Token} = req.cookies;
    try {
        const decoded = jwt.verify(Token , process.env.JWT_SECRET);
        console.log(decoded)

        req.user = decoded;

        next();
    } catch (error) {
        return res.redirect('/home')
    }

    console.log("sucessful")
}