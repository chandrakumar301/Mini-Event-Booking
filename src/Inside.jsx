import React from 'react'
import star from "./assets/Star.png"
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
export default function Inside() {
     const [events, setEvents] = useState([]);
    useEffect(()=>{
        const GetEvents=async ()=>{
            try{
            const D =await axios.get("https://mini-event-backend-808f.onrender.com/getevent");
            setEvents(D.data.Get);
            }
            catch(err){
                alert(err.response);
            }
        }
        GetEvents();
    },[])
  return (
        <div className='chandra'>
            {events.map((data,index)=>{
                return(
                    <div className='A1'key={index}>
                    <img src={star} width="375px" alt="" />
                    <div className='Details'>
                    <h3>title:{data.title}</h3>
                    <h3>Date:{data.date}</h3>
                    <h3>Location:{data.location}</h3>
                    <h3>Capacity:{data.capacity}</h3>
                    </div>
                     <div className='btn'>
                        <button>RSPV</button>
                        <button>Join</button>
                        <button>UnJoin</button>
                    </div>
                    </div>
                )
            }
            )
        }

        </div>
  )
}
