import React from 'react'

function EventPage() {
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
                    <button>Create Event</button>
                    <button>Update Event</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default EventPage
