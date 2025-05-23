import { nanoid } from "nanoid"
import jwt from "jsonwebtoken"
import tryCatchWrapper from "./tryCatchWrapper.js"

export const generateNanoId = (length) => {
    return (nanoid(length))
}

export const signToken = (payload  ) => {
    return jwt.sign(payload , process.env.JWT_KEY , {expiresIn : "1D"})
}

export const verifyToken = (token) => {
    const ans =   jwt.verify(token , process.env.JWT_KEY)
    return ans
}