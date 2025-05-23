
import { verifyToken } from "./helper.js";
import { findUserById } from "../dao/user.dao.js";

export const attachUser = async (req , res , next) => {
    const token = req.cookies.token ;
    if (!token) return next()
    
    try {
        const decode = verifyToken(token)
        const user = findUserById(decode.id)
        if (!user) return next()
        req.user = user ;
        next()
    } catch (error) {
        console.log(error)
        next()
    }
}