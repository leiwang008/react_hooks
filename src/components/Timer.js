// React 16.x code​​​​​​‌‌‌​​‌​‌​​‌‌‌​‌​​​‌‌​​​‌​ below
import React, { useState, useEffect, useRef } from "react";

// Simulated data loading function (do not modify)
const loadTimerData = () => {
    return new Promise((resolve) => {
      // Generate random delay between 2000ms (2s) and 10000ms (10s)
      const randomDelay = Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000;
  
      setTimeout(() => {
        resolve({
          timerTitle: "Elapsed Time",
          timerColor: "#007bff",
        });
      }, randomDelay);
    });
  };
  

function TimerData() {
  // Create state variables for:
  // - seconds (to track elapsed time)
  // - loading (to track if data is loading)
  // - timerData (to store loaded data)
  const [seconds, setSeconds] = useState(0)
  const [loading, setLoading] = useState(true)
  const [timerData, setTimerData] = useState(null)

  // initialize a ref to hold the current loading state
  const loadingRef = useRef(loading);

  //  make sure if loading change, the loadingRef will change too
  useEffect(
    () => {
        loadingRef.current = loading;
    },
    [loading]
  );

  // Implement useEffect for timer functionality
  // - The timer should increment every second
  // - Clean up the timer when component unmounts
  useEffect(() => {
    const intervalID = setInterval(() => {
        if (loadingRef.current)
            setSeconds(prev => prev + 1);
    }, 1000); // 1000ms = 1 second

    return () => clearInterval(intervalID); // cleanup on unmount
  }, []); 

  
  // - Call loadTimerData() to fetch the data
  const loadData = async() => {
      try{
          const data = await loadTimerData();
          setLoading(false);
          setTimerData(data);

        //   clearInterval(interval.current);
      }catch(err){
          console.error("failed get data", err);
          setLoading(true);
      }
  };

  // Implement useEffect for data loading
  // - Update the loading state and timerData state
  // - This effect should only run once when the component mounts
  useEffect(
    () => {
        // loadTimerData()
        // .then( res =>{
        //     setLoading(false);
        //     setTimerData(res);
        // })
    
        loadData();
    }, []
  );

  // Function to reset the timer
  const resetTimer = () => {
    // reset functionality
    setLoading(true);
    setSeconds(0);
    setTimerData(null);
    loadData();

  };

  return (
    <div className="timer-container">
      <h1>Timer with useEffect</h1>
      
      {/* Show loading message or timer data */}
      {/* If loading, display: <p>Loading timer data...</p> */}
      {/* If data loaded, display the timer with the loaded title and color */}

      <div className="timer-display">
        {
            loading? "loading timer data ..." : <h2>{timerData?.timerTitle}</h2>
        }
      </div>
      <div className="timer-display">
        {seconds} seconds.
      </div>
      

      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={resetTimer}>
        Reset Timer
      </button>
    </div>
  );
}

/* Ignore and do not change the code below */
/**
 * Preview function
 * This function renders the `App` component and is used for visual rendering
 * during the challenge. Candidates do not need to modify this.
 */
export function Preview() {
  return <TimerData />;
}
/* Ignore and do not change the code above */

// Export the main App component
export default TimerData;
