import React, { useState } from 'react'
import axios from "axios"
function EventPage() {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [date,setDate]=useState("");
  const [capacity,setCapacity]=useState("");
  const [location,setLocation]=useState("");
  const CreateEvent=async ()=>{
    try {
      const C=await axios.post("https://mini-event-backend-808f.onrender.com/event",{
        imageUrl:"/vite.svg",
        title:title,
        description:description,
        date:date,
        location:location,
        capacity:capacity
      })
      console.log(C.data);
    }
    catch(err){
      alert(err);
    }
  }
  return (
    <div className='Event'>
        <div className='Event1'>
            <h1>Create New Event</h1>
            <div className='Event2'>
                <input type="text" value={title} onInput={(e)=>{setTitle(e.target.value)}}placeholder='Enter Title' />
                <input type="text" value={description} onInput={(e)=>{setDescription(e.target.value)}}placeholder='EnterDescription' />
                <input type="date" value={date} onInput={(e)=>{setDate(e.target.value)}}placeholder='Select Date' />
                <input type="text" value={location} onInput={(e)=>{setLocation(e.target.value)}}placeholder='Enter Location'/>
                <input type="number" value={capacity} onInput={(e)=>{setCapacity(e.target.value)}}placeholder='Enter Capacity' />
                <input className="file" type="file" placeholder='Upload image'/>
                <div className='update'>
                    <button onClick={()=>{CreateEvent()}}>Create Event</button>
                    <button>Update Event</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default EventPage
