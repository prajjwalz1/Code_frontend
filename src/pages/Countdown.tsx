import React from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <div>Countdown Completed!</div>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
 if (completed) {
    return <Completionist />;
 } else {
    return (
      <div>
        {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
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