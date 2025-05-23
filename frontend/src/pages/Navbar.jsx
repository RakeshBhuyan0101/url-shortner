import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/auth.store'
import { logOutUser } from '../api/user.Api'

const Navbar = () => {
  const { user, setUser, setUrls } = useAuthStore()
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()
  
  const handleLogout = async () => {
    try {
      await logOutUser()
      setUser(null)
      setUrls([])
      navigate('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }
  
  return (
    <nav className="bg-gray-800 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">URL Shortener</span>
            </Link>
          </div>
          
          {/* Right side - User info */}
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-3 relative">
                <span className="text-gray-200 hidden sm:block">{user.user.name || 'User'}</span>
                <div 
                  className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {user.user.name ? user.user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                
                {/* Dropdown menu */}
                {showDropdown && (
                  <div className="absolute right-0 top-12 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar