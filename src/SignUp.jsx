import React from 'react'

function SignUp() {
  return (
    <div className='Side'>
        {/* <h1>Create Your Account</h1> */}
        <div className='Side1'>
            
        <h1>Create Your Account</h1>
            <div className='Side2'>
                <div className='one'>
                <input id='name' type="text"  placeholder='Enter First Name'/>
                <input id='name1' type="text"  placeholder='Enter Last Name'/>
                </div>
                <div className='two'>
                <input id='email' type="email"  placeholder='Enter Email'/>
                <input id='pass' type="password"  placeholder='Enter Password'/>
                </div>
                <div className='three'>
                <input id='checkPass' type="password"  placeholder='Check Password'/>
                <input id='checkPass' type="password"  placeholder='Check Password'/>
                </div>

                <button className='but'>Sign in</button>
                <div className='Already'>
                <h3>Already Have Account</h3>
                <button >Click Here</button>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default SignUp
