// React 16.x code​​​​​​‌‌‌​​‌​‌​‌​​​‌​‌​​​​​‌​‌‌ below
import React, { useReducer } from "react";

// Action types
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
};

// Initial state
const initialState = {
  count: 0
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};


// Counter Component
function ReducerCounter() {
    // TODO: Use useReducer with the reducer function and initialState
    const [state, dispatch] = useReducer(reducer, initialState);
  
  
  return (
    <div className="font-sans max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h1 className="text-lg font-semibold mb-2 text-left">Counter with useReducer</h1>
      
      {/* Display the current count */}
      <div className="text-lg font-semibold mb-2 text-left">
        current count: {state.count}
      </div>
      
      {/* Add buttons that dispatch INCREMENT and DECREMENT actions */}
      <div className="space-x-4">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={() => dispatch({"type": ACTIONS.INCREMENT})}>Increment</button>
        <button className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded" onClick={() => dispatch({"type": ACTIONS.DECREMENT})}>Decrement</button>
      </div>
      
    </div>
  );
}

/* Ignore and do not change the code below */
/**
 * Preview function
 */
export function Preview() {
  return <ReducerCounter />;
}
/* Ignore and do not change the code above */

// Export the main component
export default ReducerCounter;