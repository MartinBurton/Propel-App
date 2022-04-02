import { useState, useEffect } from 'react';
import React from 'react';

const Time = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 1000)
  });

  return(
    <div style={{marginLeft: 'auto', paddingRight: '10px'}}>
      <h3>{clockState}</h3>
    </div>
  );
};

export default Time;