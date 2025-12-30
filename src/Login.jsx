import React, { useState } from 'react'
import "./App.css"
import axios from "axios"
function Login() {
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");

  const AuthPerson=async ()=>{
    try{
    const A=await axios.post("https://mini-event-backend-808f.onrender.com/login",{
      email:email,
      password:pass
      })
      console.log(A.data);
    }
    catch (error){
       alert(error.response.data.message);
    }
  }
  return (
    <div className='Log'>
        <div className='Bar'>
            <h1>Welcome Back</h1>
            <div className='Items'>
                <input id='name' type="email"   value={email} onInput={(e)=>{setEmail(e.target.value)}}placeholder='EnterName'/>
                <input id='password' type="password"  placeholder='Enter Password'/>
                <button className='but'  value={pass} onInput={(e)=>{setPass(e.target.value)}}onClick={()=>{AuthPerson()}}>Login</button>
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
