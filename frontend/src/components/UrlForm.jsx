import React, {  useState } from "react";
import { createShortUrl } from "../api/shortUrlApi";
import useAuthStore from "../store/auth.store";
import { isValidUrl } from "../utils/helper";

const UrlForm = () => {
  const [value, setValue] = useState("");
  const [slug , setSlug] = useState("")
  const [error , setError] = useState("")
  const { urls , setUrls} = useAuthStore()


 const handelSubmit =  async () => {
  if (!isValidUrl(value)) return setError("Please enter a valid URL")

  try {
    setError("")
    const url = await createShortUrl(value , slug);
    setValue("")
    setSlug("")
    setUrls([url , ...urls])
    
  } catch (error) {
      setError(error.message || "Internal Server Error")
      console.log(error)
  } 

  }

  return (
    <div className="space-y-4 ">
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
        </div>
    )}
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="https://example.com"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Enter custom url (optional)
        </label>
        <input
          type="text"
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Enter custom Slug"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handelSubmit}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      >
        Shorten URL
      </button>

      

    </div>
  );
};

export default UrlForm;
