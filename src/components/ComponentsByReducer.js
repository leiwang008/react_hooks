import React, { useReducer} from 'react';
import '../index.css';
import './comp.css';
import ReducerCounter from './ReducerCounter';


function AReducer(params = {}){
  const [count, setCount] = useReducer(
    (count, step) => {return count+step;}, // the returned value count+step will be set to reducer variable 'count'
    0
  );
  const [checked, toggle] = useReducer(
    (checked) => !checked,  // the returned !checked will be set to reducer variable 'checked'
    false
  );


  // Action types
  const ACTION_TYPE = {
    COMMAND: 'COMMAND',
    SALUT: 'SALUT'
  };

  class Action {
    constructor(type) {
      this.type = type;
    }
  }
  const commandAction = new Action(ACTION_TYPE.COMMAND);
  const salutAction = new Action(ACTION_TYPE.SALUT);  

  // initial state for message reducer

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
      case ACTION_TYPE.COMMAND:
        return {
          message: "do homework!"
        };
      case ACTION_TYPE.SALUT:
        return {
          message: "good morning."
        };
      default:
        return {
          message: "unknown action"
        };
    }
  }

 return (
  <div className="font-sans max-w-6xl mx-auto p-8 bg-gray-50 min-h-fit">
    <h1 className="text-2xl font-bold mb-8 text-gray-800">
      Components implemented by <code className="bg-gray-200 px-1 rounded">useReducer</code>
    </h1>

    {/* Flex container for all sections */}
    <div className="flex flex-wrap gap-6 justify-between">

      {/* Counter Section */}
      <section className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Counter</h2>
        <button
          onClick={() => setCount(2)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Increment Counter
        </button>
        <div className="mt-2 text-gray-700">Counter: {count}</div>
      </section>

      {/* Reducer Counter Section (assuming it's a separate component) */}
      <ReducerCounter />

      {/* Toggle Section */}
      <section className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Toggle Checkbox</h2>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={toggle}
            id="toggle_checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="toggle_checkbox" className="text-gray-700">
            {checked ? "Checked" : "Unchecked"}
          </label>
        </div>
      </section>

      {/* Message Section */}
      <section className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Send a Message</h2>
        <p className="mb-4 text-gray-700">
          <strong>Message:</strong> {state.message}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => dispatch(commandAction)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Command
          </button>
          <button
            onClick={() => dispatch(salutAction)}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          >
            Salut
          </button>
        </div>
      </section>
    </div>
  </div>
);

}


// Export the main component
export default AReducer;