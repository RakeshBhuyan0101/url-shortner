import { createNewUser, findUserByEmail } from "../dao/user.dao.js"
import { ConflictError } from "../utils/errorHandler.js"
import { signToken } from "../utils/helper.js"

export const registerUser = async (name , email , password) => {
    
    const user = await findUserByEmail(email)
    if (user) throw new ConflictError("User already exist")

    const newUser = await createNewUser(name , email , password)
    const token = await  signToken({_id : newUser._id} )
    return token;
}

export const loginUser = async (email , password) => {
    const user = await findUserByEmail(email)
    if (!user) throw new Error("Email not found please Login")
    
    if (user.password != password)  {
        throw new Error("Invalid credentials") 
    }

    const token = signToken({id : user._id})
    return { user , token};
}