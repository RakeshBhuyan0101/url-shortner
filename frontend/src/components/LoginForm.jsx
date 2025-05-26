import React, { useState } from "react";
import { loginUser } from "../api/user.Api";
import useAuthStore from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ state }) => {
    const [ email , setEmail] = useState("")
    const [ password , setPassword] = useState("")
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")
    const navigate = useNavigate()
    const {user ,setUser} = useAuthStore()
    const handleSumbit = async () => {
      if(!email || !password) return setError("Please enter email and password")
        try {
            setError("")
            setLoading(true)
            const user = await loginUser(email , password)
            setUser(user)
            navigate("/home")

        } catch (error) {
            setError(error.message || "Internal Server Error")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        <div>
        {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                        {error}
                    </div>
                )}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleSumbit}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          { loading ? "Loging In ... " : "Login"} 
        </button>

        <p  className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span onClick={() => state(false)} className="text-blue-600 hover:underline cursor-pointer ">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
