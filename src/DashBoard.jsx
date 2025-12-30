import React from 'react'
import SignUp from './SignUp'
import Login from "./Login"
import {useState} from "react"
import EventPage from './EventPage'
import Events from './Events'

function DashBoard() {
    const [eve,setEve]=useState(false);
    const [ureve,setUreve]=useState(false);
    const [log,setLog]=useState(false);
    const [sign,setSign]=useState(false);
    const [host,setHost]=useState(false);
    // const k=true;
const event=()=>{
    setEve(true);
    setUreve(false);
    setLog(false);
    setSign(false);
    setHost(false);

}
const urEvents=()=>{
    setUreve(true);
    setEve(false);
    setLog(false);
    setSign(false);
    setHost(false);

}
const Log=()=>{
    setLog(true);
    setUreve(false);
    setEve(false);
    setHost(false);
    setSign(false);
}
const sign1=()=>{
    setSign(true);
    setUreve(false);
    setEve(false);
    setLog(false);
    setHost(false);
}
const host1=()=>{
    setHost(true);
    setUreve(false);
    setEve(false);
    setSign(false);
    setLog(false);
}
  return (
    <div className='Dash1'>
        <header className='head'>
            <h1>Festify.Me</h1>
            <nav>
                <a onClick={()=>{event()}}>Events</a>
                <a onClick={()=>{host1()}}>Host an Event</a>
                <a onClick={()=>{urEvents()}}>Your Events</a>
                <a onClick={()=>(alert("Go To next Page"))}>Toggle</a>
                <a onClick={()=>{Log()}}>Login</a>
                <a onClick={()=>{sign1()}}>SignUp</a>
            </nav>
            <a href="/profile">P</a>
        </header>
        {/* {k?<h1>Welcome</h1>:null} */}
        <div className='Dash2'>
            {eve ? <Events/> 
            : ureve ? <Events/>
            : log ? <Login/> 
            : sign ?<SignUp/>
            : host? <EventPage/>
            : null}
        </div>
    </div>
  )
}

export default DashBoard
