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
      return {...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return {...state, count: state.count - 1 };
    default:
      return state;
  }
};


// Counter Component
function ReducerCounter() {
    // TODO: Use useReducer with the reducer function and initialState
    const [state, dispatch] = useReducer(reducer, initialState);
  
  
  return (
        <section className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Counter with useReducer</h2>
          <p className="mb-4">
            current count: {state.count}
          </p>
            {/* Add buttons that dispatch INCREMENT and DECREMENT actions */}
            <div className="space-x-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={() => dispatch({"type": ACTIONS.INCREMENT})}>Increment</button>
                <button className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded" onClick={() => dispatch({"type": ACTIONS.DECREMENT})}>Decrement</button>
            </div>
        </section>
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