
import  React, { useState , useEffect } from 'react'
import "../Css/TimeClock.style.css"


export const TimeClock = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className="clock-time-clock">
        <div className='time-clock date-time'>
            <p className='time-clock time'>{date.toLocaleTimeString()}</p>
            <p>{date.toLocaleDateString()}</p>
        </div>
        </div>
    )
}

export default TimeClock