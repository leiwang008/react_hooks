import React, {useState, useReducer} from 'react';
import '../index.css';
import './comp.css';


function AReducer(params = {}){
  const total = params.total || 5;
  const [count, setCount] = useReducer(
    (count, param) => {return count+param;} , 0
  );

  return(
    <>
    <button onClick={() => setCount(1)}>Increment Counter</button>
    <div>counter: {count}</div>
    </>
  );
}


// Export the main component
export default AReducer;