// import moment from 'moment';
import { useState, useEffect } from 'react';

function CountdownTimer({ onZero }) {
  const initialDuration = 15; // 1 minute
  //   const initialDuration = 24 * 60 * 60; // 24 hours in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialDuration);

  useEffect(() => {
    let interval;

    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      onZero();
      clearInterval(interval);
      setTimeRemaining(initialDuration);
    }

    return () => clearInterval(interval);
  }, [timeRemaining, onZero]);

  //Only use if it for 1 day:
  //   const hours = Math.floor(timeRemaining / 3600);
  //   const minutes = Math.floor((timeRemaining % 3600) / 60);
  //   const seconds = timeRemaining % 60;

  //For to test 1minute
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      {/* {hours < 10 ? `0${hours}` : hours}: */}
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default CountdownTimer;
