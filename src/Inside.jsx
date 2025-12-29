import React from 'react'
import star from "./assets/Star.png"
export default function Inside() {
  return (
    <div>
      <div className='A1'>
        <img src={star} width="375px" alt="" />
        <div className='Details'>
            <h3>title</h3>
            <h3>Date</h3>
            <h3>Location</h3>
            <h3>Capacity</h3>
            <div className='btn'>
            <button>RSPV</button>
            <button>Join</button>
            <button>UnJoin</button>
            </div>
        </div>
    </div>
    </div>
  )
}
