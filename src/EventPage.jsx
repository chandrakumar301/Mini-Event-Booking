import React from 'react'
import axios from "axios"
function EventPage() {
  const CreateEvent=async ()=>{
    try {
      const C=await axios.post("http://localhost:5000/event",{
        imageUrl:"/vite.svg",
        title:"Chandu Game",
        description:"Death Game",
        date:"10/07/2004",
        capacity:"100"
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
                <input type="text" placeholder='Enter Title' />
                <input type="text" placeholder='EnterDescription' />
                <input type="date" placeholder='Select Date' />
                <input type="text" placeholder='Enter Location'/>
                <input type="number" placeholder='Enter Capacity' />
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
