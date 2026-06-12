import { useEffect, useState } from "react";

function DigitalClock(){

    const[time,setTime] = useState(new Date());
    useEffect(() => {
        const IntervalId = setInterval(() => {
            setTime(new Date())
        },1000)
        return () => clearInterval(IntervalId)
    },[])

    return(
        <>
        <p>{time.toLocaleTimeString()}</p>
        </>
    )
}
export default DigitalClock;