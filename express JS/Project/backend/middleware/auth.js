import jwt from 'jsonwebtoken'
import User from '../model/user.js';

const checkAuth =  async (req,res,next)=>{
    const token = req.cookies.jwt;
    if(!token) return res.status(401).send({error:"You are not logged in"})
    
    try{
        const {_id} = jwt.verify(token,"mysecretkey");
        const user =  await User.findById(_id)
        req.user = {
            _id:user._id,
            fullname:user.fullname,
            email: user.email,
            isAdmin:user.isAdmin
        }
    }catch(err){
        res.status(400).send({error: err.message})
    }


    next();
}

const checkAdmin = async (req,res,next)=>{
    if(req.user.isAdmin)
        next();
    else
        res.status(403).send({error:"You are not authorized to perform this operation"})
}

export {checkAuth,checkAdmin}
