import React from 'react';
import Countdown from 'react-countdown';





const Completionist = () => <div>Countdown Completed!</div>;
//@ts-ignore
const renderer = ({ days, hours, minutes, seconds, completed }) => {
 if (completed) {
    return <Completionist />;
 } else {
    return (
      <div className= "countdown-container py-4 ">
        <div className ="countdown-values text-black text-xl gap-2 mx-auto items-center justify-center flex flex-row  ">
        <div className ="countdown-value p-5 bg-white">
          <p className='text-xl'>{days}</p><span>Days</span>
        </div>
        <div className ="countdown-value p-5 bg-white">
          <p className='text-xl'>{hours}</p><span>Hours</span>
        </div>
        <div className ="countdown-value  p-5 bg-white">
          <p className='text-xl'>{minutes}</p><span>Minutes</span> 
        </div>
        <div className ="countdown-value  p-5 bg-white">
          <p className='text-xl'>{seconds}</p> <span>Seconds</span>
        </div>
        
        </div>  
        </div>
    );
 }
};

const CountdownComponent = () => {
 return (
    <div>
      
      <Countdown date={Date.now() + 1000 * 60 * 60 * 24} renderer={renderer} />
    </div>
    
 );
};

export default CountdownComponent;