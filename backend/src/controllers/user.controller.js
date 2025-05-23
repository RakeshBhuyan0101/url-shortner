import tryCatchWrapper from "../utils/tryCatchWrapper.js"
import { loginUser, registerUser } from "../services/auth.service.js"
import { cookieOptions } from "../config/config.js";
import { findUrlsByUserId } from "../dao/user.dao.js";

export const signup = tryCatchWrapper( async (req , res) => {
    const { name , email , password } = req.body;
    const token = await registerUser(name , email , password)
    res.cookie("token" , token , cookieOptions )
    res.status(200).json({token})
})

export const signin = tryCatchWrapper ( async (req , res) => {
    const {email , password} = req.body
    const {user , token} = await loginUser (email , password)
    req.user = user
    res.cookie("token" , token , cookieOptions )
    return res.status(200).json({user:user,message:"login success"})
})


export const logout = tryCatchWrapper((req , res) => {
    res.clearCookie("token" , cookieOptions )
    res.status(200).json({message:"logout success"})
})

export const getAllUrls = tryCatchWrapper (async (req , res) => {
    const urls = await findUrlsByUserId (req.user._id)

    res.status(200).json({urls})
})