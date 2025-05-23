import SortUrl from "../models/shortUrl.model.js"
import User from "../models/user.model.js"

export const findUserByEmail = async (email) => {
    return await User.findOne({email})
}

export const findUserById = async (id) => {
    return await User.findById(id)
}

export const createNewUser = async (name , email , password) => {
    const newUser = new User( {name , email , password}) ;
    await newUser.save()
    return newUser;
} 

export const findUrlsByUserId = async (id) => {
    return await SortUrl.find({user : id})
}