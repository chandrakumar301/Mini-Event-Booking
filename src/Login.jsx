import React from 'react'
import "./App.css"
function Login() {
  return (
    <div className='Log'>
        <div className='Bar'>
            <h1>Welcome Back</h1>
            <div className='Items'>
                <label htmlFor="name"></label>
                <input id='name' type="text"  placeholder='EnterName'/>
                <label htmlFor="password"></label>
                <input id='password' type="password"  placeholder='Enter Password'/>
                <button className='but'>Login</button>
            </div>
            
            <div className='Forget'>
                <h3>Forgot Password</h3>
                <h3>Don't have an account SignUp</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Login
