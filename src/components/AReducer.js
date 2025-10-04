import React, {useState, useReducer} from 'react';
import '../index.css';
import './comp.css';


function AReducer(params = {}){
  const [count, setCount] = useReducer(
    (count, step) => {return count+step;} , 0
  );
  const [checked, toggle] = useReducer(
    (checked) => !checked, false
  );

  return(
    <>
    <button onClick={() => setCount(2)}>Increment Counter</button>
    <div>counter: {count}</div>
    <div>
      <input type='checkbox' checked={checked} onChange={toggle} id="toggle_checkbox"/>
      <label htmlFor='toggle_checkbox'>{checked? "checked":"unchecked"}</label>
    </div>
    </>
  );
}


// Export the main component
export default AReducer;