import axiosInstance from "../utils/axiosInstance"

export const loginUser = async (email , password) => {
   const {data} = await  axiosInstance.post("/api/auth/signin" , {email , password}) ;
   return data ;
}

export const registerUser = (name , email , password) => {
   const {data} = axiosInstance.post("/api/auth/signup" , {name , email , password}) ;
   return data ;
}

export const logOutUser = () => {
    const data = axiosInstance.get("/api/auth/logout")
    return data
}