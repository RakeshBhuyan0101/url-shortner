import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/RegisterForm'

const AuthPage = () => {
    const [login , setLogin] = useState(true)
  return (
    <div className='min-h-screen  '>
        {
            login ? <LoginForm state= {setLogin} /> : <SignupForm state= {setLogin} />
        }
    </div>
  )
}

export default AuthPage