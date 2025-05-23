import React, { useState } from "react";
import { registerUser } from "../api/user.Api";

const SignupForm = ({state}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const res = await registerUser(name , email , password)
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
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
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span onClick={() => state(true)} className="text-blue-600 hover:underline cursor-pointer ">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
