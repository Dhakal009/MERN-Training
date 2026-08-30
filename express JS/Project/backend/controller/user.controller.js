//import { comparePassword, hashPassword } from "../../utils/helper.js";
import User from "../model/user.js"
import createToken from "../utils/createToken.js";

const signUp =  async (req,res) =>{
    let {fullname,email,password,isAdmin} = req.body;
    const user = await User.findOne({email});
    if(user) return res.status(400).send({error:"User already Exists"})
    
    // password = hashPassword(password)
    const newUser = await User.create({fullname,email,password,isAdmin})
    res.send({
        message:"User Created",
        user:{
            fullname:newUser.fullname,
            email:newUser.email,
            isAdmin:newUser.isAdmin
        }
    })

}

const login =  async (req,res)=>{
    const {email,password} = req.body;
    const user =  await User.findOne({email});
    if(!user) return res.status(400).send({error:"User doesn't exit. Please signUp"})
    if(!await user.comparePassword(password)) 
        return res.status(400).send({error:"Invalid Password"})
    else
        createToken(user._id,res)
        return res.send({message:"login successfull"})


}


async function logout(req, res) {
    // clear the auth token cookie
    res.clearCookie('jwt');
    return res.send({ message: 'Logged out' });
}

export {signUp,login,logout};