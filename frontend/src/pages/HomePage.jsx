import React, { useEffect } from "react";
import UrlForm from "../components/UrlForm";
import Navbar from "./Navbar";
import { getAllUrls } from "../api/shortUrlApi";
import useAuthStore from "../store/auth.store";
import { appUrl } from "../utils/helper";

const HomePage = () => {
  const { urls, setUrls } = useAuthStore();
  
  useEffect(() => {
    const fetchUrls = async () => {
      const data = await getAllUrls();
      setUrls(data);
    };
    
    fetchUrls();
  }, [setUrls , ]);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-1 p-4 gap-6 max-w-7xl mx-auto w-full">
        {/* URL Form on the left */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Shorten Your URL</h2>
          <UrlForm />
        </div>
        
        {/* URLs list on the right */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md max-h-[700px] overflow-y-auto">
          <h2 className=" border text-2xl font-bold text-center mb-6 sticky top-0 bg-white mt-0 pt-2 pb-4">Your URLs</h2>
          
          {urls && urls.length > 0 ? (
            <div className="space-y-4">
              {urls.map((url) => (
                <div key={url._id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <a 
                      href={url.full_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium truncate max-w-[70%]"
                    >
                      {url.full_url}
                    </a>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {url.clicks} clicks
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={`${appUrl || 'http://localhost:3000/'}${url.short_url}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      {`${window.location.origin.split('//')[1].split(':')[0]}/${url.short_url}`}
                    </a>
                    
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`${window.location.origin.split(':')[0]}/${url.short_url}`);
                      }}
                      className="text-gray-500 hover:text-gray-700 text-sm"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              You haven't created any short URLs yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;