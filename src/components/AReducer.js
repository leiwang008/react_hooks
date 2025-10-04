import React, { useReducer} from 'react';
import '../index.css';
import './comp.css';


function AReducer(params = {}){
  const [count, setCount] = useReducer(
    (count, step) => {return count+step;}, // the returned value count+step will be set to reducer variable 'count'
    0
  );
  const [checked, toggle] = useReducer(
    (checked) => !checked,  // the returned !checked will be set to reducer variable 'checked'
    false
  );

  const initMessage = {
    "message": "hello"
  }

  // here we define a reducer function dispatch which will call 
  // sendMessage function whose returned result will be set to reducer variable 'state'
  // the initial value is initMessage for this reducer variable 'state'
  const [state, dispatch] = useReducer(sendMessage, initMessage);

  //  define the real reducer function
  function sendMessage(state, action) {
    console.log(`previous message ${state.message}`)
    switch(action.type) { // fixed typo: switch -> switch
      case "command":
        return {
          message: "do homework!"
        };
      case "salut":
        return {
          message: "good morning."
        };
      default:
        return {
          message: "unknown action"
        };
    }
  }

  return(
    <div className="font-sans max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">

      {/* Counter Section */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-left">Counter</h2>
        <button
          onClick={() => setCount(2)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Increment Counter
        </button>
        <div className="mt-2 text-gray-700">Counter: {count}</div>
      </section>

      {/* Toggle Section */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-left">Toggle Checkbox</h2>
        <div className="flex items-center justify-center space-x-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={toggle}
            id="toggle_checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 text-center"
          />
          <label htmlFor="toggle_checkbox" className="text-gray-700">
            {checked ? "Checked" : "Unchecked"}
          </label>
        </div>
      </section>

      {/* Message Section */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-left">Send a Message</h2>
        <p className="mb-4">
          <strong>Message:</strong> {state.message}
        </p>
        <div className="space-x-4">
          <button
            onClick={() => dispatch({ type: "command" })}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Command
          </button>
          <button
            onClick={() => dispatch({ type: "salut" })}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          >
            Salut
          </button>
        </div>
      </section>
    </div>

  );
}


// Export the main component
export default AReducer;