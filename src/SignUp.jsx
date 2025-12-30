import React from 'react'
import axios from "axios"
import { useState } from 'react';
function SignUp() {
  const Goto=()=>{

  }
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [sname,setSname]=useState("");
  const [password,setPassword]=useState("");
const Auth= async ()=>{
  try{
    const res=await axios.post("https://mini-event-backend-808f.onrender.com/signup",{
      firstName:name,
      secondName:sname,
      email:email,
      password:password
    })
    console.log(res.data);
    
  }
  catch (error){
    alert(error.response.data);
  }
}
  return (
    <div className='Side'>
        <div className='Side1'>
        <h1>Create Your Account</h1>
            <div className='Side2'>
                <div className='one'>
                <input id='name' type="text" value={name} onInput={(e)=>{setName(e.target.value)}} placeholder='Enter First Name'/>
                <input id='name1' type="text"  value={sname} onInput={(e)=>{setSname(e.target.value)}}placeholder='Enter Last Name'/>
                </div>
                <div className='two'>
                <input id='abc' type="email" value={email} onInput={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email'/>
                <input id='pass' type="password" value={password} onInput={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password'/>
                </div>
                <div className='three'>
                <input id='checkPass' type="password"  placeholder='Check Password'/>
                </div>

                <button className='but' onClick={()=>{Auth()}}>Sign in</button>
                <div className='Already'>
                <h3>Already Have Account</h3>
                <button onClick={()=>{Goto()}}>Click Here</button>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default SignUp
